<template lang="pug">
span.icon(:style='styles')
  slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'fill',
      validator: value => ['fill', 'stroke'].includes(value)
    },
    height: {
      type: String,
      default: '.85em'
    }
  },

  computed: {
    styles() {
      return {
        height: this.height,
        [`${this.type}`]: 'var(--icon-color)',
        [`${this.type === 'fill' ? 'stroke' : 'fill'}`]: 'none',
        transition: `${this.type} .2s ease-in-out`
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.icon
  display: inline-block
  line-height: 0
  & > *
    height: 100%
</style>
