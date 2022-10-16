<template lang="pug">
section.main
  Header
  Container.main__container(maxWidth="1920px")
    .main__home(ref="home")
      Container(maxWidth="1320px")
        .main__heading СОЗДАЕМ ПРОСТРАНСТВО МЕЧТЫ
        MouseIcon.main__scroll
    video.main__video(src="/images/animation/video.mp4" ref="video" preload="metadata")
</template>
  
<script>
import MouseIcon from '../Icons/MouseIcon.vue'
import Container from '../Container.vue'
import * as ScrollMagic from 'scrollmagic'
import { TweenMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import Header from '../Navigation/Header.vue'

export default {
  components: { MouseIcon, Container, Header },

  data() {
    return {
      accelamount: 0.1,
      scrollpos: 0,
      delay: 0
    }
  },

  methods: {
    animation() {
      ScrollMagicPluginGsap(ScrollMagic, TweenMax)
      const controller = new ScrollMagic.Controller()

      const videoAnimation = TweenMax.fromTo(this.$refs.video, { opacity: 0 }, { opacity: 1 })
      const sceneVideo = new ScrollMagic.Scene({
        triggerElement: '.main',
        triggerHook: 0,
        duration: 10000
      })
        .setPin('.main')
        .setTween(videoAnimation)
        .addTo(controller)
      sceneVideo.on('update', this.updateScene)

      const textAnimation = TweenMax.fromTo(this.$refs.home, { opacity: 1 }, { opacity: 0 })
      new ScrollMagic.Scene({
        triggerElement: '.main',
        triggerHook: 0,
        duration: 1000
      })
        .setTween(textAnimation)
        .addTo(controller)
    },

    updateScene(e) {
      this.scrollpos = e.scrollPos / 1000
    },

    setCurrentVideoTime() {
      this.delay += (this.scrollpos - this.delay) * this.accelamount

      this.$refs.video.currentTime = this.delay
    },

    checkAndoid() {
      return navigator.userAgent.match(/Android/i) || false
    }
  },

  mounted() {
    if (!this.checkAndoid()) {
      this.animation()
      setInterval(this.setCurrentVideoTime, 33.3)
    }
  }
}
</script>
  
<style lang="sass" scoped>
.main
  width: 100%
  height: 100vh
  &__container
    height: 100%
    position: relative
  &__video
    width: 100%
    height: 100%
    object-fit: cover
  &__home
    width: 100%
    min-height: 100vh
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    &::before
      content: ""
      position: absolute
      display: block
      bottom: 0
      left: 0
      right: 0
      z-index: -4
      width: 100%
      height: 100%
      background: url('~/public/images/main-bg.jpg')
      background-size: cover
      background-position: 50%
      opacity: .12
  &__heading
    -webkit-text-stroke: 2px var(--secondary-color)
    color: transparent
    margin: 0 auto
    font-weight: 300
    text-align: center
    letter-spacing: 0.1em
    +fluidType(375px, 1920px, 40px, 50px)
    +media(700px)
      +fluidType(375px, 1920px, 55px, 60px)
      max-width: 80%
    +media(960px)
      +fluidType(375px, 1920px, 70px, 80px)
      max-width: 80%
  &__scroll
    display: inline-block
    position: absolute
    left: 50%
    bottom: 3.5rem
    z-index: 1
</style>
  