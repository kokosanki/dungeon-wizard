<template>
  <div>
    <h2>Choose an alignment</h2>
    <ul>
      <li class="alignment-list" v-for="item in alignments" v-bind:key="item.index">
        <button @click="pickAlignment(item.name)" class="alignment-list__item">
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Character from '@/services/api/Character.js'

export default {
  data () {
    return {
      alignments: []
    }
  },
  async mounted () {
    await this.getAlignments()
  },
  methods: {
    ...mapMutations(['chooseAlignment']),
    async getAlignments () {
      this.alignments = await Character.getAlignments()
    },
    pickAlignment (chosenAlignment) {
      this.chooseAlignment(chosenAlignment)
      this.$emit('nextStep')
    }
  }
}
</script>

<style>
.alignment-list {
  list-style: none;
}
.alignment-list__item {
  cursor: pointer;
}
</style>
