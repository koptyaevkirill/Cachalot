<template lang="pug">
section.main
  Header
  Container.main__container(maxWidth="1920px")
    .main__home(ref="home")
      Container(maxWidth="1320px")
        img.main__heading(src="/images/main_text.svg")
        MouseIcon.main__scroll
    video.main__video(:src="videoSrc" preload="true" autoplay loop muted plays-inline)
</template>
  
<script>
import MouseIcon from '../Icons/MouseIcon.vue'
import Container from '../Container.vue'
import Header from '../Navigation/Header.vue'

export default {
  components: { MouseIcon, Container, Header },

  data() {
    return {
      videoSrc: '/images/bg.mp4'
    }
  },

  methods: {
    videoSrcChange() {
      if (window.innerWidth <= 900 && window.innerWidth > window.innerHeight) {
        this.videoSrc = '/images/vertical_bg_orientation.mp4'
        return
      }

      if (window.innerWidth <= 900) {
        this.videoSrc = '/images/vertical_bg.mp4'
        return
      }

      this.videoSrc = '/images/bg.mp4'
      return
    }
  },

  mounted() {
    this.videoSrcChange()
    window.addEventListener('resize', this.videoSrcChange)
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
    margin: 0 auto
    max-width: 100%
    width: 100%
    min-width: 80vw
  &__scroll
    display: inline-block
    position: absolute
    left: 50%
    bottom: 3.5rem
    z-index: 1
</style>
  