<template>
  <div>
    <h2>Choose a class</h2>
    <ul>
      <li class="class-list" v-for="item in classes" v-bind:key="item.index">
        <button @click="pickClass(item.index)" class="class-list__item">
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
      classes: []
    }
  },
  async mounted () {
    await this.getClasses()
  },
  methods: {
    ...mapMutations(['chooseClass']),
    async getClasses () {
      this.classes = await Character.getClasses()
    },
    pickClass (chosenClass) {
      this.chooseClass(chosenClass)
      this.$emit('nextStep')
    }
  }
}
</script>

<style>
.class-list {
  list-style: none;
}
.class-list__item {
  cursor: pointer;
}
</style>
