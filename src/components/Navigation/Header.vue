<template lang="pug">
header.header
  Container.header__container(maxWidth='1320px')
    Logo.header__logo
    .header__navbar
      Navigation.header__navigation
      .header__text HoReCa<br/>equipment
</template>

<script>
import Container from '../Container.vue'
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'

export default {
  components: {
    Container,
    Logo,
    Navigation
  }
}
</script>

<style lang="sass" scoped>
.header
  width: 100%
  position: absolute
  top: 0
  z-index: 1
  padding: 1.2rem 2.7rem
  &__container
    display: flex
    align-items: flex-end
    justify-content: space-between
  &__navbar
    display: flex
    align-items: flex-end
    justify-content: flex-end
    padding-bottom: .33rem
    margin-bottom: .5rem
    border-bottom: 1px solid var(--primary-color)
    flex: 1
  &__text
    letter-spacing: 0.1em
    font-weight: 500
    line-height: .94rem
    text-align: right
    margin-left: 6.6rem
</style>
