<template lang="pug">
a(href="/").logo
  img.logo__image(src='/images/logo.svg', alt='')
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.logo
  line-height: 0
  display: inline-block
  height: 6.6rem
  &__image
    height: 100%
    width: 100%
</style>
