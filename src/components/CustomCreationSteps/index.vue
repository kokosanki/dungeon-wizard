<template>
    <div>
        <class-step @nextStep="nextStep" v-if="step === 1" />
        <background-step @nextStep="nextStep" v-if="step === 2" />
        <race-step @nextStep="nextStep" v-if="step === 3" />
        <alignment-step @nextStep="nextStep" v-if="step == 4" />
    </div>
</template>

<script>
import ClassStep from '@/components/CustomCreationSteps/ClassStep.vue'
import RaceStep from '@/components/CustomCreationSteps/RaceStep.vue'
import AlignmentStep from '@/components/CustomCreationSteps/AlignmentStep.vue'
import BackgroundStep from '@/components/CustomCreationSteps/BackgroundStep.vue'

export default {
  components: {
    ClassStep,
    RaceStep,
    AlignmentStep,
    BackgroundStep
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
