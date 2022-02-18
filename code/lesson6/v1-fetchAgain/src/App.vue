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

// HOMEWORK:
// use SWAPI.dev (Star Wars API)
//
// Create a List of All Star Wars Movies
// When clicking a Movie show the Character and Actor names of the cast members
</script>

<style scoped>
.flexbox {
  display: flex;
  flex-direction: row;
}
</style>