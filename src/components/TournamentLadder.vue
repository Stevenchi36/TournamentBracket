<template>
  <div>
    <template v-for="match in matches">
      <match-container
        :team1="match.team1.name"
        :team2="match.team2.name"
        :isMatchCompleted="match.isCompleted"
        :matchCode="String.fromCharCode(69)"
        :team1score="match.team1.score"
        :team2score="match.team2.score"
        winColor="rgb(255, 138, 29)"
        :key="match.name"
      />
    </template>
    <span>{{ String.fromCharCode(69) }}</span>
  </div>
</template>

<script>
import MatchContainer from './MatchContainer.vue';

export default {
  components: {
    MatchContainer,
  },
  props: {
    ladderSize: {
      type: Number,
      required: true,
    },
    matches: Array,
  },
};
</script>
