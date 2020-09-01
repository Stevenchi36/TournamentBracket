<template>
  <div id="app">
    <select v-model="selected" style="margin-bottom: 10px;">
      <option v-for="option in dataOptions" :value="option.value" :key="option.value">{{
        option.text
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
      dataOptions: [
        { text: '4 teams - Finished', value: 0 },
        { text: '8 teams - Unfinished', value: 1 },
      ],
      selected: 0,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
