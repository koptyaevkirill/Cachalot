<template lang="pug">
.footer-copyright
  .footer-copyright__date Все права защищены
    .footer-copyright__date-year 2022
  .footer-copyright__developer Разработка сайта:
    .footer-copyright__developer-name O  R  B  O  S
</template>
  
<script>
export default {
  components: {}
}
</script>
  
<style lang="sass" scoped>
.footer-copyright
  display: flex
  justify-content: space-between
  flex-direction: column
  color: var(--secondary-color)
  +media(960px)
    flex-direction: row
    align-items: center
  &__date, &__developer
    display: flex
    align-items: center
    letter-spacing: 0.1em
    +media(960px)
      justify-content: space-between
  &__date
    +fluidType(375px, 1920px, 12px, 16px)
  &__date-year
    border-left: 1px solid var(--secondary-color)
    margin-left: 1.5rem
    padding-left: 1.5rem
  &__developer
    +fluidType(375px, 1920px, 10px, 14px)
    font-family: var(--developer-font)
  &__developer-name
    font-weight: 700
    letter-spacing: .3em
    margin-left: 1rem
</style>
  