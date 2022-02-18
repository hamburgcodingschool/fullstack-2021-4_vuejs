<template>
  <h1>Title</h1>
  <h2>{{ selectedPokemon.name }}</h2>
  <div class="flexbox">
    <List @clickLink="clickedLink" />
    <Detail :pokemon="selectedPokemon" />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Detail from "./components/Detail.vue";

export default {
  components: {
    List,
    Detail
  },
  data: function() {
    return {
      selectedPokemon: { name: "Nothing Selected yet..."}
    }
  },
  methods: {
    clickedLink(value) {
      this.selectedPokemon = value;
    }
  }
}
</script>

<style scoped>
.flexbox {
  display: flex;
  flex-direction: row;
}
</style>