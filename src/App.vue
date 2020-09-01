<template>
  <div id="app">
    <select v-model="selected" style="margin-bottom: 10px;">
      <option v-for="(option, index) in tournamentLadder" :value="index" :key="index">{{
        option.ladderName
      }}</option>
    </select>
    <tournament-ladder
      :teamCount="tournamentLadder[selected].teamCount"
      :matches="tournamentLadder[selected].matches"
    />
  </div>
</template>

<script>
import tournamentLadder from './api/mock/tournamentLadder';
import TournamentLadder from './components/TournamentLadder.vue';

export default {
  name: 'App',
  components: {
    TournamentLadder,
  },
  data() {
    return {
      tournamentLadder,
      selected: 2,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
