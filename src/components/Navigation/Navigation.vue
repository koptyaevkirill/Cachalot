<template lang="pug">
nav.navigation
  a(@click="scrollMeTo('about')").navigation__link.link.link--underline о компании
  a(@click="scrollMeTo('specification')").navigation__link.link.link--underline спецификация
  a(@click="scrollMeTo('contacts')").navigation__link.link.link--underline контакты
</template>

<script>
export default {
  methods: {
    scrollMeTo(refName) {
      const element = document.getElementById(refName)

      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="sass" scoped>
.navigation
  display: none
  +media(1140px)
    display: flex
    align-items: center
    gap: 3.3rem
  &__link
    letter-spacing: 0.1em
    font-weight: 500
    line-height: .94rem
</style>
