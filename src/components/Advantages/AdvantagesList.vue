<template lang="pug">
.advantager-list
  .advantager-list__item(v-for="advantage in advantages")
    img.advantager-list__icon(:src="`/images/${advantage.icon}`")
    .advantager-list__text {{ advantage.text }}
</template>
  
<script>
export default {
  data() {
    return {
      advantages: [
        { icon: 'adv 1.png', text: 'Cобственное производство и современное высоко- технологичное оборудование' },
        {
          icon: 'adv 2.png',
          text: 'Cобственное конструкторское бюро, готовое реализовать любые, даже самые смелые решения'
        },
        {
          icon: 'adv 3.png',
          text: 'Высокое качество материалов, инновационные технологические и производственные процессы'
        },
        { icon: 'adv 4.png', text: 'Профессиональная команда, которой реализовано более 200 успешных проектов' }
      ]
    }
  },

  components: {}
}
</script>
  
<style lang="sass" scoped>
.advantager-list
  &__item
    display: flex
    align-items: center
  &__item + &__item
    margin-top: 3.33rem
  &__text
    +fluidType(320px, 1200px, 14px, 16px)
    font-weight: 400
  &__icon
    width: 32px
    height: 32px
    margin-right: 1rem
</style>
  