<template>
  <ExerciseComponent />
  <!-- <br>
  <Box class="yellowBorder" :showGreenText="false" />
  <br>
  <Box class="yellowBorder" :showGreenText="true" /> -->
</template>

<script>
import Box from "./components/Box.vue";
import ExerciseComponent from "./components/ExerciseComponent.vue";

export default {
  components: {
    Box,
    ExerciseComponent
  }
}
</script>

<style scoped>
  .yellowBorder {
    border: solid 15px yellow;
  }
</style>