<template lang="pug">
.footer-main
  .footer-main__information
    a(href="tel:+7 495 197-77-05").footer-main__phone.link.link--underline +7 495 197-77-05
    a(href="meilto:hello@cachalot.ru").footer-main__mail.link.link--underline hello@cachalot.ru
    .footer-main__address Московская область, г. Одинцово<br/>Можайское шоссе, дом 8, корп. 1
    FooterForm.footer-main__form
  .footer-main__map
    iframe.footer-main__map-frame(src="https://yandex.ru/map-widget/v1/?um=constructor%3A767d27c4028cdc9cd06ec4ecca68214edbc0d2f77f4a09d7ff6e3c778e07dddf&amp;source=constructor" width="100%" height="100%" frameborder="0")
</template>
  
<script>
import FooterForm from './FooterForm.vue'
export default {
  components: { FooterForm }
}
</script>
  
<style lang="sass" scoped>
.footer-main
  display: flex
  justify-content: space-between
  margin: 0 auto
  flex-direction: column
  --link-color: var(--tertiary-color)
  +media(960px)
    max-width: 80%
    align-items: center
    flex-direction: row
  &__information, &__map
    flex: 1
    +media(960px)
      flex: 0 1 50%
  &__information
    margin-bottom: 5rem
    display: flex
    flex-direction: column
    +media(960px)
      padding-right: 6rem
      margin-bottom: 0
  &__map-frame
    min-height: 250px
    +media(960px)
      height: 550px
  &__phone, &__mail
    display: inline-block
    +fluidType(375px, 960px, 28px, 32px)
    font-weight: 600
    +media(960px)
      +fluidType(375px, 1920px, 38px, 48px)
  &__mail
    margin-top: 1.6rem
  &__address
    color: var(--tertiary-color)
    border-top: 1px solid
    margin-top: 2.5rem
    padding-top: 2.5rem
    +fluidType(375px, 1920px, 16px, 20px)
  &__form
    margin-top: 5rem
</style>
  