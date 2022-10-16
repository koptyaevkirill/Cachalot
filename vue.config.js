const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Cachalot - создаем пространство мечты'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles.sass"`
      }
    }
  }
})
