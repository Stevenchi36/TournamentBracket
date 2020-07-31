<template>
  <div class="match-container">
    <div class="team-container first-team">
      <span class="team-name">{{ team1 }}</span>
      <span
        class="team-score"
        :style="isMatchCompleted && team1score > team2score ? `background-color:${winColor};` : ''"
        >{{ team1score }}</span
      >
    </div>
    <div class="team-container">
      <span class="team-name">{{ team2 }}</span>
      <span
        class="team-score"
        :style="isMatchCompleted && team2score > team1score ? `background-color:${winColor};` : ''"
        >{{ team2score }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team1: String,
    team2: String,
    team1score: Number,
    team2score: Number,
    isMatchCompleted: Boolean,
    winColor: {
      type: String,
      default: 'orange',
    },
    matchName: String,
  },
};
</script>

<style lang="scss" scoped>
.match-container {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
}
.team-container {
  padding: 0 0 0 0.5rem;
  background-color: rgb(240, 240, 240);
  display: flex;

  &.first-team {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
}
.team-name {
  min-width: 200px;
  padding: 0.2rem 0;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.team-score {
  padding: 0.2rem 0;
  width: 100%;
  text-align: center;
}
</style>
