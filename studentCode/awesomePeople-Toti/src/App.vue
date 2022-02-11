<template>
  <h1>Hello awesome people!</h1>
  <ul>
    <li><Window1 /></li>
    <li><Window2 /></li>
    <li><Window3 /></li>
  </ul>
</template>
<script>
import Window1 from "./components/Window1.vue";
import Window2 from "./components/Window2.vue";
import Window3 from "./components/Window3.vue";

export default {
  components: { Window1, Window2, Window3 },
};
</script>
<style>
body {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: pink;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  text-align: center;
  display: inline;
  justify-content: center;
  padding: 10px;
  border: 2px solid rgb(152, 18, 241);
}

a {
  text-decoration: none;
  display: flex;
}
</style>
