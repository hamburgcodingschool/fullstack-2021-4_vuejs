<template>
  <Title />  
  <Navigation />

  <p>Not a component</p>

  <Body />
  <Footer />
</template>

<script>
import Title from "./components/Title.vue";
import Navigation from "./components/Navigation.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Title,
    Navigation,
    Body,
    Footer
  }
}
</script>


<style>
  body {
    background-color: pink;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    padding: 0;
  }
</style>

<style scoped>
  p {
    color: red;
  }
</style>