<template lang="pug">
.specification-preview
  img.specification-preview__image(:src="preview")
</template>
  
<script>
export default {
  props: {
    preview: {
      type: String,
      required: true
    }
  }
}
</script>
  
<style lang="sass" scoped>
.specification-preview
  &__image
    max-width: 100%
    max-height: 100%
</style>
  