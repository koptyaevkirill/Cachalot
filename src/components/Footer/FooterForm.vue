<template lang="pug">
form.footer-form(@submit.prevent='sendRequest')
  input.footer-form__input(
    type='text',
    name='name',
    placeholder='Ваше имя',
    v-model='request.name',
    required
  )
  input.footer-form__input(
    type='text',
    name='phone',
    placeholder='Номер телефона',
    v-model='request.phone',
    required
  )
  button.footer-form__button(
    type='submit',
    name='submit',
    :disabled='sending'
  ) Отправить
</template>
  
<script>
import axios from 'axios'
import jsonToFormData from 'json-form-data'

export default {
  data() {
    return {
      request: {
        name: '',
        phone: ''
      },
      sending: false
    }
  },

  methods: {
    async sendRequest(e) {
      if (this.sending) return

      this.sending = true
      const formData = jsonToFormData(this.request)
      try {
        const response = await axios.post('https://zto.works/mail.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (!response.error) {
          this.resetForm()
          e.target.reset()
        }
        alert('Успешно отправлено!')
      } catch (error) {
        alert('Ошибка при отправке. Попробуйте позже!')
      } finally {
        this.sending = false
      }
    },

    resetForm() {
      this.request = {
        name: '',
        phone: ''
      }
    }
  }
}
</script>
  
<style lang="sass" scoped>
.footer-form
  --link-color: var(--primary-color)
  &__input, &__button
    outline: none
    appearance: none !important
    border: none
  &__input
    width: 100%
    border-radius: 0
    font-weight: 500
    background-color: transparent
    border: 1px solid var(--secondary-color)
    padding: .8rem 1.7rem
    +fluidType(320px, 1200px, 16px, 20px)
    +transition(focus, .15s)
    color: var(--secondary-color)
    margin-bottom: 1.67rem
    &::placeholder
      color: var(--secondary-color)
  &__button
    width: 100%
    font-weight: 600
    background-color: var(--secondary-color)
    border: 1px solid var(--secondary-color)
    color: var(--link-color)
    padding: .8rem 1.7rem
    transition: background
    transition-timing-function: ease-in-out
    transition-duration: .2s
    cursor: pointer
    +fluidType(320px, 1200px, 16px, 20px)
    &:hover
      background-color: transparent
      border-color: var(--secondary-color)
      --link-color: var(--secondary-color)
    &[disabled]
      filter: grayscale(1) opacity(.5)
      cursor: auto
</style>
  