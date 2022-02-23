<template>
  <h1>Hi</h1>

  <input @input="textChanged" :value="text">
  
  <br>
  <br>
  <input @input="event => text = event.target.value" :value="text">
  
  <br>
  <br>
  <input v-model="text">
  
  <br>
  <br>
  <button @click="buttonClicked">change the text</button>
  <br>
  <br>
  <div>{{ text }}</div>

</template>

<script>
export default {
  data: function() {
    return {
      text: ""
    }
  },
  methods: {
    textChanged(event) {
      this.text = event.target.value;
    },
    buttonClicked() {
      this.text = "THE BUTTON CHANGED THE TEXT!!!!!";
    }
  }
}
</script>

<style scoped>
  div {
    width: 300px;
    min-height: 100px;
    background-color: pink;
  }
</style>