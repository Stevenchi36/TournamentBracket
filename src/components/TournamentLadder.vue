<template>
  <div class="ladder-container" :style="`height: ${height}`">
    <div class="column-container" ref="mainColumn">
      <template v-for="( round, index ) in totalRounds">
        <div class="combo-container" :key="'comboColumn' + index" :style="style(index)">
          <match-column
            :row="index"
            :matches="getMatchesArray(index)"
            :margin="columnMargin(index)"
            :roundArray="roundCountArray"
            :highlightedTeam="highlightedTeam"
            @teamHovered="updateHighlightedTeam">
          </match-column>
          <connector-column
            :row="index"
            :roundOf="roundCountArray[index]"
            :margin="columnMargin(index)"
          ></connector-column>
        </div>
      </template>

    </div>
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
  data() {
    return {
      highlightedTeam: null,
    };
  },
  props: {
    teamCount: {
      type: Number,
      required: true,
    },
    matches: Array,
    height: {
      type: String,
      default: '500px',
    },
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
    updateHighlightedTeam(name) {
      this.highlightedTeam = name;
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
    position: relative;
    width: 100%;
    max-height: 100vh;
    border: 1px solid black;
    overflow: auto;

    * {
      margin: 0;
      padding: 0;
    }
  }
  .column-container {
    position: absolute;
    display: flex;
    padding: 10px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .combo-container {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }
  }
</style>
