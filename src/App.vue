<template lang="pug">
.page
  Main
  About#about
  Specification#specification
  Footer#contacts
</template>
  
<script>
import Main from './components/Sections/Main.vue'
import Footer from './components/Footer/Footer.vue'
import About from './components/Sections/About.vue'
import Specification from './components/Sections/Specification.vue'

export default {
  components: {
    Main,
    Footer,
    About,
    Specification
  }
}
</script>
  
<style lang="sass">
.page
</style>
  