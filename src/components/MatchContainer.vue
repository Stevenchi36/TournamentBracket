<template>
  <div class="match-container" :style="{marginTop: spacingTop}">
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
    <span class="match-number">{{ matchName | getMatchNameFromNumber }}</span>
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
    matchName: Number,
    spacingTop: String,
  },
  filters: {
    getMatchNameFromNumber(number) {
      const nameLength = number / 26;
      let code;
      if (nameLength >= 1) {
        console.log('NameLength + 65 - 1 =', String.fromCharCode(nameLength + 65 - 1));
        code = String.fromCharCode(nameLength + 65 - 1);
        code += String.fromCharCode((number % 26) + 65);
      } else {
        code = String.fromCharCode(number + 65);
      }
      return code;
    },
  },
};
</script>

<style lang="scss" scoped>
.match-container {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  position: relative;
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
.match-number {
  position: absolute;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  transform: translate(-50%, -50%);
  top: 50%;
  font-size: 0.8rem;
  background-color: rgb(255, 255, 255);
  padding: 0.1rem;
  border-radius: 50%;
}
</style>
