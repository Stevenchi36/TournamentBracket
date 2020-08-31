<template>
  <div class="connector-column" :class="roundOf === 2 ? 'last-round' : ''" v-if="roundOf !== 1">
    <template v-for="index in roundOf/2">
      <match-connector :index="index" :row="row" :key="index" />
    </template>
  </div>
</template>

<script>
import MatchConnector from './MatchConnector.vue';

export default {
  components: {
    MatchConnector,
  },
  props: {
    row: {
      type: Number,
      required: true,
    },
    roundOf: {
      type: Number,
      required: true,
    },
    margin: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .connector-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.last-round {
      justify-content: center;
    }
  }
</style>
