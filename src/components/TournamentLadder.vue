<template>
  <div class="ladder-container">
    <template v-for="( round, index ) in totalRounds">
      <match-column
        :row="index"
        :matches="getMatchesArray(index)"
        :roundOf="roundCountArray[index]"
        :key="'matchCol' + index">
      </match-column>
      <connector-column
        :row="index"
        :roundOf="roundCountArray[index]"
        :key="'connectCol' + index"
      ></connector-column>
    </template>
  </div>
</template>

<script>
import MatchColumn from './MatchColumn.vue';
import ConnectorColumn from './ConnectorColumn.vue';

const spacing = 20;

export default {
  components: {
    MatchColumn,
    ConnectorColumn,
  },
  props: {
    teamCount: {
      type: Number,
      required: true,
    },
    matches: Array,
  },
  methods: {
    getSpacing() {
      return `${spacing}px`;
    },
    getMatchesArray(index) {
      if (index < this.matches.length) {
        return this.matches[index];
      }
      return [];
    },
  },
  computed: {
    roundCountArray() {
      const possibleValues = [1, 2, 4, 8, 16, 32, 64, 128];
      const matchCount = [];

      for (let i = 0; i < possibleValues.length; i++) {
        if (this.teamCount / 2 >= possibleValues[i]) {
          matchCount.push(possibleValues[i]);
        }
      }

      return matchCount.reverse();
    },
    totalRounds() {
      return this.roundCountArray.length;
    },
  },
};
</script>

<style lang="scss">
  .ladder-container {
    display: flex;

    * {
      box-sizing: border-box;
    }
  }
</style>
