<template>
  <div class="ladder-container">
    <div class="connector-column">
      <template v-for="( match, index ) in matches[0]">
        <match-connector v-if="index % 2 === 0" :index="index" :key="index" />
      </template>
    </div>
    <template v-for="( round, index ) in matches">
      <match-column :row="index" :matches="round" :key="'matchCol' + index"></match-column>
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
    // Team Count
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
