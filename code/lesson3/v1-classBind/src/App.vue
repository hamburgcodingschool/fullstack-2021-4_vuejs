<template>
  <Box class="yellowBorder" :showGreenText="false" />
  <br>
  <Box class="yellowBorder" :showGreenText="true" />
</template>

<script>
import Box from "./components/Box.vue";

export default {
  components: {
    Box
  }
}
</script>

<style scoped>
  .yellowBorder {
    border: solid 15px yellow;
  }
</style>