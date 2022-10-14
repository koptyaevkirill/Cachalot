<template lang="pug">
footer.footer
  Container.footer__container(maxWidth='1320px')
    FooterMain.footer__main
    .footer__bottom  
      FooterInfo.footer__info
      FooterCopyright.footer__copyright
</template>
  
<script>
import FooterInfo from './FooterInfo.vue'
import FooterCopyright from './FooterCopyright.vue'
import Container from '../Container.vue'
import FooterMain from './FooterMain.vue'
export default {
  components: { FooterInfo, FooterCopyright, Container, FooterMain }
}
</script>
  
<style lang="sass" scoped>
.footer
  background-color: var(--primary-color)
  &__bottom
    padding: 2rem 3rem
    border-top: 1px solid var(--tertiary-color) 
  &__main
    padding: 5rem 3rem
    +media(960px)
      padding: 8rem 0
  &__copyright
    margin-top: .9rem
</style>
  