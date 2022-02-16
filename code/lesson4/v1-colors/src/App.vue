<template>
  <h1>Colors</h1>
  <ColorList :colors="colorData" @clickCircle="clickedCircle" />
  <h2>Selected color: {{ selectedColor }}</h2>
  <ColorPreview :color="selectedColor" />
</template>

<script>

import ColorList from "./components/ColorList.vue";
import ColorPreview from "./components/ColorPreview.vue";
import RandomColor from "./utilities/RandomColor";

export default {
  components: {
    ColorList,
    ColorPreview
  },
  data: function() {
    return {
      colorData: [],
      selectedColor: undefined
    }
  },
  methods: {
    clickedCircle(color) {
      this.selectedColor = color;
    }
  },
  mounted() {

    // HOMEWORK
    // Make sure this is understood bring questions :D

    // Create an array of random Colors :D

    // this.colorData = [
    //     "azure",
    //     "lime",
    //     "red",
    //     "green",
    //     "blue",
    //     "#FF0",
    //     "#F0F",
    //     "#0FF"
    // ]
    this.colorData = RandomColor.createRandomColorArray(10);
    this.selectedColor = this.colorData[0];
  }
}

// EXERCISE:
// 1 - Create a new component Color component
// 2 - that component should receive an array of colors as a prop. Ex: ["red", "green", "#000"]
// 2.1 - For each element in the array create a circle 75px diameter
// 2.2 - The circle should have the respective color
// 3 - The component should display in a row a circle for each color in the prop
// 4 - Odd circles should have a black border, Even circles should have a grey border
// 5 - Show the name of the color inside the circle

</script>