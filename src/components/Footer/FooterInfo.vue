<template lang="pug">
.footer-info
  .footer-info__sitename CACHALOT
  .footer-info__information
    a(href="tel:+7 495 197-77-05").footer-info__phone.link.link--underline +7 495 197-77-05
    .footer-info__information-separator |
    a(href="mailto:hello@cachalot.ru").footer-info__mail.link.link--underline hello@cachalot.ru
    .footer-info__information-separator |
    .footer-info__address МО, Одинцово, Можайское ш., д. 8, к. 1
</template>
  
<script>
export default {
  components: {}
}
</script>
  
<style lang="sass" scoped>
.footer-info
  --link-color: var(--tertiary-color)
  display: flex
  justify-content: space-between
  flex-direction: column
  color: var(--tertiary-color)
  +media(960px)
    flex-direction: row
    align-items: center
  &__information
    display: flex
    align-items: center
    gap: 1.5rem
    +fluidType(375px, 1920px, 12px, 16px)
    letter-spacing: 0.1em
    font-weight: 600
    margin-top: 1rem
    +media(960px)
      margin-top: 0
      justify-content: space-between
  &__information-separator
    &:nth-last-of-type(2)
      display: none
      +media(960px)
        display: inline-block
  &__sitename
    +fluidType(375px, 1920px, 14px, 18px)
    font-weight: 400
    letter-spacing: 1.4em
    font-family: var(--secondary-font)
  &__address
    display: none
    +media(960px)
      display: inline-block
</style>
  