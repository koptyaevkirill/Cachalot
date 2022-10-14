<template lang="pug">
.container(:style='{ maxWidth }')
  slot
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: String,
      default: '1780px'
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  margin: 0 auto
</style>
