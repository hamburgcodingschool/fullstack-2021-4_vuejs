<script setup>
import MyFirstComponent from './components/MyFirstComponent.vue'
</script>

<template>
  <h1>Hello</h1>
  <h2>HTML is fun</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit obcaecati nemo reprehenderit quo. Harum ad suscipit commodi reprehenderit maiores, ex iure voluptatum esse expedita provident a natus? Omnis, ut.</p>

  <MyFirstComponent title="Hello" text="this is cool" />
  <br>
  <MyFirstComponent title="Goodbye" text="Props are awesome..." />

</template>


<style scoped>
  h1 {
    background-color: red;
    color: yellow;
    text-align: center;
  }

  h2 {
    text-decoration: underline;
    color: green;
  }

  p {
    padding: 20px;
    background-color: pink;
  }
</style>