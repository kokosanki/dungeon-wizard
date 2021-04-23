<template>
  <div class="menu">
    <button class="menu__button" @click="chooseMode('custom')">Custom</button>
    <button class="menu__button" @click="chooseMode('generate')">Generate</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    chooseMode (mode) {
      return mode === 'custom' ? this.$emit('createCustom') : this.$emit('autogenerate')
    }
  }
}
</script>

<style scoped>
.menu__button {
  cursor: pointer;
}
</style>
