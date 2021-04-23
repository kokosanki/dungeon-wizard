<template>
    <div>
        <class-step v-if="step" />
    </div>
</template>

<script>
import ClassStep from '@/components/CustomCreationSteps/ClassStep.vue'
export default {
  components: { ClassStep },
  data () {
    return {
      step: 1
    }
  }
}
</script>

<style>

</style>
