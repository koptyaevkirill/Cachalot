<template lang="pug">
section.specification
  Container.specification__container(maxWidth='1320px')
    .specification__container-inner
      .specification__header
        .specification__heading Кухонный остров:
          strong CACHALOT
        .specification__sizes 2900x802x900 мм
      .specification__list
        SpecificationsItem(
          v-for="specification in specifications"
          :specification="specification"
        )
      SpecificationPreview.specification__model
</template>
  
<script>
import Container from '../Container.vue'
import SpecificationsItem from '../Specifications/SpecificationsItem.vue'
import SpecificationPreview from '../Specifications/SpecificationPreview.vue'
export default {
  data() {
    return {
      specifications: [
        { text: 'Столешница:   нержавеющая сталь AISI 304, 2мм' },
        { text: 'Тепловая поверхность 30-90°С' },
        { text: 'Держатель для блендера' },
        { text: 'Смеситель, розетки 220В' },
        { text: 'Планша гриль Teppan 30-300° 2-х зонный с водяным контуром' },
        { text: 'Мультизонная индукционная плита 3.3 кВт' },
        { text: 'Ложкомойка с проточной водой' }
      ]
    }
  },

  components: { Container, SpecificationsItem, SpecificationPreview }
}
</script>
  
<style lang="sass" scoped>
.specification
  background-color: var(--tertiary-color)
  color: var(--advantages-color)
  padding: 5rem 0
  +media(960px)
    padding: 0
  &__container
    display: flex
    justify-content: center
    flex-direction: column
    +media(960px)
      min-height: 100vh
  &__container-inner
    width: 100%
    margin: 0 auto
    +media(960px)
      max-width: 80%
  &__header
    display: flex
    justify-content: space-between
    flex-direction: column
    padding: 0 3rem
    +media(960px)
      flex-direction: row
      align-items: center
      padding: 0
  &__heading
    font-weight: 600
    +fluidType(375px, 1920px, 32px, 40px)
    display: flex
    justify-content: space-between
    flex-direction: column
    +media(960px)
      flex-direction: row
    strong
      font-weight: 600
      letter-spacing: 0.4em
      font-family: var(--secondary-font)
      +media(960px)
        margin-left: 1.6rem
  &__sizes
    +fluidType(375px, 1920px, 20px, 24px)
    letter-spacing: 0.05em
  &__list
    display: flex
    justify-content: space-between
    flex-direction: column
    gap: 2.1rem
    padding: 4rem 3rem
    +media(960px)
      justify-content: center
      flex-wrap: wrap
      align-items: center
      flex-direction: row
      padding: 5.5rem 0 7rem 0
    +media(1320px)
      justify-content: space-between
  &__model
    padding: 0 1.5rem
    +media(960px)
      padding: 0
</style>
  