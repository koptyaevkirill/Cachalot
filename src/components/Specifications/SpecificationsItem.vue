<template lang="pug">
.specification-item(
  @click="$emit('change-active', specification)"
  @mouseover="$emit('change-active', specification)"
) {{ specification.text }}
</template>
  
<script>
export default {
  props: {
    specification: {
      type: Object,
      required: true
    }
  }
}
</script>
  
<style lang="sass" scoped>
.specification-item
  color: var(--specification-color)
  font-weight: 500
  +fluidType(375px, 1920px, 14px, 16px)
  letter-spacing: 0.05em
  text-decoration: underline
  cursor: pointer
  &:hover, &.active
    color: var(--primary-color)
</style>
  