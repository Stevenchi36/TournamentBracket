<template>
  <div class="match-column" :style="paddingNeeded">
    <template v-for="( match, index ) in matches">
      <match-container
        win-color="rgb(255, 138, 29)"
        :match-name="match.number"
        :match-info="match"
        :key="match.number"
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
  },
  methods: {
    getSpacing() {
      return `${spacing}px`;
    },
  },
  computed: {
    paddingNeeded() {
      // TODO: Get number in better way
      let padding = 35;
      padding = 35 * this.row;

      return {
        paddingTop: `${padding}px`,
      };
    },
  },
};
</script>
