<template>
  <div class="ladder-container">
    <div class="match-column">
      <template v-for="( match, index ) in matches">
        <match-container
          :team1="match.team1.name"
          :team2="match.team2.name"
          :isMatchCompleted="match.isCompleted"
          :team1score="match.team1.score"
          :team2score="match.team2.score"
          winColor="rgb(255, 138, 29)"
          :matchName="match.number"
          :key="match.number"
          :spacing-top="index !== 0 ? getSpacing() : '0'"
        />
      </template>
    </div>
    <div class="connector-column">
      <template v-for="( match, index ) in matches">
        <match-connector :index="index" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import MatchContainer from './MatchContainer.vue';
import MatchConnector from './MatchConnector.vue';

const spacing = 20;

export default {
  components: {
    MatchContainer,
    MatchConnector,
  },
  props: {
    ladderSize: {
      type: Number,
      required: true,
    },
    matches: Array,
  },
  methods: {
    getSpacing() {
      return `${spacing}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .ladder-container {
    display: flex
  }
</style>
