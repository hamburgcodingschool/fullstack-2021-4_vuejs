<template>
  <h1>My Awesome Counter</h1>
  <Counter />
  <br>
  <br>
  <br>
  <br>
  <Slider />
</template>

<script>
import Counter from "./components/Counter.vue";
import Slider from "./components/Slider.vue";

export default {
  components: {
    Counter,
    Slider
  }
}
</script>