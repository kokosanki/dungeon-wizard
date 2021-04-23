<template>
  <div>
    <h2>Choose a background</h2>
    <ul>
      <li class="background-list" v-for="item in backgrounds" v-bind:key="item.index">
        <button @click="pickBackground(item.name)" class="background-list__item">
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      backgrounds: [
        {
          name: 'Acolyte',
          index: 'acolyte'
        },
        {
          name: 'Charlatan',
          index: 'charlatan'
        },
        {
          name: 'Criminal/Spy',
          index: 'criminal/spy'
        },
        {
          name: 'Entertainer',
          index: 'entertainer'
        },
        {
          name: 'Folk hero',
          index: 'folkhero'
        },
        {
          name: 'Gladiator',
          index: 'gladiator'
        },
        {
          name: 'Guild Artisan / Guild Merchant',
          index: 'guildartisan/guildmerchant'
        },
        {
          name: 'Hermit',
          index: 'hermit'
        },
        {
          name: 'Knight',
          index: 'knight'
        },
        {
          name: 'Noble',
          index: 'noble'
        },
        {
          name: 'Outlander',
          index: 'outlander'
        },
        {
          name: 'Pirate',
          index: 'pirate'
        },
        {
          name: 'Sage',
          index: 'sage'
        },
        {
          name: 'Sailor',
          index: 'sailor'
        },
        {
          name: 'Soldier',
          index: 'soldier'
        },
        {
          name: 'Urchin',
          index: 'nrchin'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['chooseBackground']),
    pickBackground (chosenBackground) {
      this.chooseBackground(chosenBackground)
      this.$emit('nextStep')
    }
  }
}
</script>

<style>
.background-list {
  list-style: none;
}
.background-list__item {
  cursor: pointer;
}
</style>
