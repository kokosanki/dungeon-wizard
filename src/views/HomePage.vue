<template>
  <div class="home">
    <h2>Create your DnD starter character</h2>
    <Menu
      @createCustom="startCustomCreation" @autogenerate="autogenerate" />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Menu
  },
  data () {
    return {
      step: 0
    }
  },
  methods: {
    startCustomCreation () {
      this.step = 1
    },
    autogenerate () {
      console.log('autogenerate')
    }
  }
}
</script>
