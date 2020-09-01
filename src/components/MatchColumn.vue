<template>
  <div class="match-column" :class="roundArray[row] === 1 ? 'last-round' : ''">
    <template v-for="(match, index) in roundArray[row]">
      <match-container
        win-color="rgb(255, 138, 29)"
        :match-name="getMatchNumber(index)"
        :match-info="getMatchInfo(index)"
        :key="'match' + getMatchNumber(index)"
        :spacing-top="index !== 0 ? getSpacing() : '0'"
        :row="row"
        :roundArray="roundArray"
      />
    </template>
  </div>
</template>

<script>
import MatchContainer from './MatchContainer.vue';

const spacing = 20;

export default {
  components: {
    MatchContainer,
  },
  props: {
    matches: Array,
    row: Number,
    margin: {
      type: Number,
      required: true,
    },
    roundArray: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getSpacing() {
      return `${spacing}px`;
    },
    getMatchInfo(matchIndex) {
      if (matchIndex < this.matches.length) {
        return this.matches[matchIndex];
      }
      return {
        team1: {
          name: '',
          score: '',
        },
        team2: {
          name: '',
          score: '',
        },
        isCompleted: false,
        isInProgress: false,
      };
    },
    getMatchNumber(index) {
      let totalSoFar = 0;
      for (let i = 0; i < this.row; i++) {
        totalSoFar += this.roundArray[i];
      }
      return totalSoFar + index;
    },
  },
};
</script>

<style lang="scss">
.match-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.last-round {
    justify-content: center;
  }
}
</style>
