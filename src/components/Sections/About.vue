<template lang="pug">
section.about
  Container.about__container(maxWidth='1320px')
    .about__container-inner
      .about__advantages
        .about__heading Преимущества
        AdvantagesList.about__advantages-list
      .about__about
        .about__heading О компании
        .about__text
          p Компания CAСHALOT - профессионал в области производства нейтрального и теплового оборудования для сегмента HoReCa, проектирует и производит типовые и уникальные изделия любой степени сложности. 
          p Многофункциональный кухонный остров от компании CACHALOT помогает организовать комфортное и эргономичное пространство для шефа, позволяет повысить  общую эффективность работы и создает неповторимую рабочую атмосферу.
          p С нами быстро и легко решаются самые сложные задачи.
</template>
  
<script>
import Container from '../Container.vue'
import AdvantagesList from '../Advantages/AdvantagesList.vue'
export default {
  components: { Container, AdvantagesList }
}
</script>
  
<style lang="sass" scoped>
.about
  position: relative
  +media(960px)
    &::after
      content: ''
      background-color: var(--primary-color)
      position: absolute
      top: 0
      left: 50%
      width: 50%
      bottom: 0
      z-index: -1
  &__container-inner
    display: flex
    flex-direction: column-reverse
    +media(960px)
      min-height: 100vh
      flex-direction: row
      max-width: 80%
      margin: 0 auto
  &__advantages, &__about
    display: flex
    justify-content: center
    flex-direction: column
    padding: 5rem 3rem
    +media(960px)
      flex: 0 0 50%
      padding: 0 6rem
  &__advantages
    color: var(--advantages-color)
  &__about
    color: var(--tertiary-color)
    background-color: var(--primary-color)
    +media(960px)
      background-color: none
  &__heading
    font-weight: 600
    +fluidType(320px, 1200px, 32px, 40px)
  &__text
    margin-top: 2.2rem
    +fluidType(320px, 1200px, 14px, 16px)
    font-weight: 500
    text-align: justify
    p + p
      margin-top: 1.3rem
  &__advantages-list
    margin-top: 4.4rem
</style>
  