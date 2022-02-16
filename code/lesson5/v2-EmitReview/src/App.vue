<template>
  <FancyInput @changeToFive="changed" />
  <div>

  </div>
</template>

<script>
import FancyInput from "./components/FancyInput.vue";

export default {
  components: {
    FancyInput
  },
  methods: {
    changed() {
      alert("Oh cool 5 characters that is awesome...");
    }
  }
}
</script>

<style scoped>
  div {
    width: 200px;
    height: 200px;
    background-color: gray;
  }
</style>