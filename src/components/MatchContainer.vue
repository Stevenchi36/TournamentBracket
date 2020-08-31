<template>
  <div class="match-container" :style="{ marginTop: spacingTop }">
    <div class="team-container first-team">
      <span class="team-name">{{ matchInfo.team1.name }}</span>
      <span class="team-score" :style="winningTeam === 1 ? `background-color:${winColor};` : ''">{{
        matchInfo.team1.score
      }}</span>
    </div>
    <div class="team-container">
      <span class="team-name">{{ matchInfo.team2.name || `Waiting` }}</span>
      <span
        class="team-score"
        :style="winningTeam === 2 > matchInfo.team1.score ? `background-color:${winColor};` : ''"
        >{{ matchInfo.team2.score }}</span
      >
    </div>
    <span class="match-number">{{ matchName | getMatchNameFromNumber }}</span>
  </div>
</template>

<script>
export default {
  props: {
    winColor: {
      type: String,
      default: 'orange',
    },
    matchName: Number,
    spacingTop: String,
    matchInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    winningTeam() {
      if (this.matchInfo.isCompleted) {
        return this.matchInfo.team1.score > this.matchInfo.team2.score ? 1 : 2;
      }
      return 0;
    },
  },
  filters: {
    getMatchNameFromNumber(number) {
      const nameLength = number / 26;
      let code;
      if (nameLength >= 1) {
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
  height: 50px;
  box-sizing: border-box;
  font-size: 0.8rem;
}
.team-container {
  padding: 0 0 0 1rem;
  background-color: rgb(240, 240, 240);
  display: flex;
  height: 50%;
  box-sizing: border-box;
  align-items: center;

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
