<template>
    <div>
        <class-step @nextStep="nextStep" v-if="step === 1" />
        <race-step @nextStep="nextStep" v-if="step === 2" />
        <alignment-step @nextStep="nextStep" v-if="step === 3" />
    </div>
</template>

<script>
import ClassStep from '@/components/CustomCreationSteps/ClassStep.vue'
import RaceStep from '@/components/CustomCreationSteps/RaceStep.vue'
import AlignmentStep from '@/components/CustomCreationSteps/AlignmentStep.vue'

export default {
  components: {
    ClassStep,
    RaceStep,
    AlignmentStep
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    nextStep () {
      this.step = ++this.step
    }
  }
}
</script>

<style>

</style>
