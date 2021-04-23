<template>
  <div>
    <h2>Choose a race</h2>
    <ul>
      <li class="race-list" v-for="item in races" v-bind:key="item.index">
        <button @click="pickRace(item.index)" class="race-list__item">
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
      races: []
    }
  },
  async mounted () {
    await this.getRaces()
  },
  methods: {
    ...mapMutations(['chooseRace']),
    async getRaces () {
      this.races = await Character.getRaces()
    },
    pickRace (chosenRace) {
      this.chooseRace(chosenRace)
      this.$emit('nextStep')
    }
  }
}
</script>

<style>
.race-list {
  list-style: none;
}
.race-list__item {
  cursor: pointer;
}
</style>
