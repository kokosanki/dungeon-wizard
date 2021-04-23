<template>
  <div class="home">
    <h2>Create your DnD starter character</h2>
    <Menu
      v-if="step === 0"
      @createCustom="startCustomCreation" @autogenerate="autogenerate" />
      <custom-creation-steps v-else-if="step === 1" />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import CustomCreationSteps from '@/components/CustomCreationSteps/index.vue'

export default {
  components: {
    Menu,
    CustomCreationSteps
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
