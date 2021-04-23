<template>
  <div>
    <h2>Type a name</h2>
    <form class="name-form" @submit="pickName">
      <input v-model="name" type="text">
      <button class="name-form__button">Save</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapMutations(['chooseName']),
    pickName (event) {
      event.preventDefault()
      if (!this.name.trim().length) {
        alert('Name cannot be empty')
        this.name = this.name.trim()
      } else {
        console.log(this.name.trim())
        this.chooseName(this.name.trim())
        this.$emit('nextStep')
      }
    }
  }
}
</script>

<style>
.name-form__button {
  cursor: pointer;
}
</style>
