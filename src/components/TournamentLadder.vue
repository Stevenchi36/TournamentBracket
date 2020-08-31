<template>
  <div class="ladder-container">
    <template v-for="( round, index ) in totalRounds">
      <div class="combo-container" :key="'comboColumn' + index" :style="style(index)">
        <match-column
          :row="index"
          :matches="getMatchesArray(index)"
          :roundOf="roundCountArray[index]"
          :margin="columnMargin(index)">
        </match-column>
        <connector-column
          :row="index"
          :roundOf="roundCountArray[index]"
          :margin="columnMargin(index)"
        ></connector-column>
      </div>
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
    columnMargin(row) {
      return 35 * row;
    },
    getMatchesArray(index) {
      if (index < this.matches.length) {
        return this.matches[index];
      }
      return [];
    },
    style(round) {
      const multiplier = 2 ** round;

      return {
        paddingTop: `${35 * multiplier - 35}px`,
        paddingBottom: `${35 * multiplier - 35}px`,
      };
    },
  },
  computed: {
    roundCountArray() {
      const possibleValues = [1, 2, 4, 8, 16, 32, 64, 128];
      const matchCount = [];

      for (let i = 0; i < possibleValues.length; i++) {
        if (32 / 2 >= possibleValues[i]) {
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
  }
  .combo-container {
    display: flex;

    * {
      box-sizing: border-box;
    }
  }
</style>
