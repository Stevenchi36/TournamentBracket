<template>
  <div id="app">
    <tournament-ladder
      :ladderSize="tournamentLadder.ladderSize"
      :matches="tournamentLadder.matches"
    />
  </div>
</template>

<script>
import { tournamentLadder } from './api/mock/tournamentLadder';
import TournamentLadder from './components/TournamentLadder.vue';

export default {
  name: 'App',
  components: {
    TournamentLadder,
  },
  data() {
    return {
      tournamentLadder,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
