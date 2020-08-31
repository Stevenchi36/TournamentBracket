<template>
  <div>
    <div class="connector">
      <div class="left-connector"></div>
      <div class="right-connector">
        <div></div>
      </div>
    </div>
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
};
</script>

<style lang="scss" scoped>
.connector {
  display: flex;
  align-items: stretch;
  margin-top: 25px;
  margin-bottom: 25px;
}

.left-connector,
.right-connector {
  width: 25px;
  height: 70px;
}

.left-connector {
  border: 1px solid black;
  border-left: 0px;
}

.right-connector {
  display: flex;
  align-items: center;

  div {
    height: 1px;
    width: 100%;
    background-color: black;
  }
}
</style>
