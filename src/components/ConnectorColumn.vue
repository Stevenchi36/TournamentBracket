<template>
  <div v-if="roundOf !== 1">
    <template v-for="index in roundOf/2">
      <match-connector :index="index" :key="index" />
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
  },
};
</script>
