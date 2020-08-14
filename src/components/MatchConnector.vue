<template>
  <div>
    {{getDirection()}}
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getDirection() {
      if (this.index === 0 || this.index % 2 === 0) {
        return 'upToDown';
      }
      return 'downToUp';
    },
  },
};
</script>
