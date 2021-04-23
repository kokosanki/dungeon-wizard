<template>
    <div>
        <class-step @updateStep="updateStep" v-if="step === 1" />
        <race-step v-if="step === 2" />
    </div>
</template>

<script>
import ClassStep from '@/components/CustomCreationSteps/ClassStep.vue'
import RaceStep from '@/components/CustomCreationSteps/RaceStep.vue'
export default {
  components: { ClassStep, RaceStep },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    updateStep (updatedStep) {
      this.step = updatedStep
    }
  }
}
</script>

<style>

</style>
