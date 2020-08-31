<template>
  <div class="match-column" :class="roundOf === 1 ? 'last-round' : ''">
    <template v-for="(match, index) in roundOf">
      <match-container
        win-color="rgb(255, 138, 29)"
        :match-name="getMatchInfo(index, 'number')"
        :match-info="getMatchInfo(index)"
        :key="getMatchInfo(index, 'number')"
        :spacing-top="index !== 0 ? getSpacing() : '0'"
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
    roundOf: Number,
    margin: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getSpacing() {
      return `${spacing}px`;
    },
    getMatchInfo(matchIndex, type = 'all') {
      if (matchIndex < this.matches.length && type === 'all') {
        return this.matches[matchIndex];
      }
      if (matchIndex >= this.matches.length && type === 'all') {
        return {
          team1: {
            name: 'Waiting',
            score: '-',
          },
          team2: {
            name: 'Waiting',
            score: '-',
          },
          isCompleted: false,
          isInProgress: false,
        };
      }
      if (matchIndex < this.matches.length && type === 'number') {
        return this.matches[matchIndex].number;
      }
      if (matchIndex >= this.matches.length && type === 'number') {
        return 0;
      }

      return matchIndex;
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
