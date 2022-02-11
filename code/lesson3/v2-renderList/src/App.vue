<template>
  <div>Now i've done it...</div>

  <PersonName :name="element" v-for="(element, index) in people" :key="index" />

</template>

<script>
function justToShow() {
  // DIFFERENT WAYS TO DEAL WITH LOOPS AND ARRAYS IN VANILLA JS
  // for (let i = 0; i < array.length; i++) {
  //    const element = array[i];
  // }

  // for (const element of array) {
    
  // }

  // array.forEach(function(element, index) {

  // });
}


import PersonName from "./components/PersonName.vue";

export default {
  components: {
    PersonName
  },
  data: function() {
    return {
      people: [
        "Jonas H.",
        "Helder",
        "Toti",
        "Jonas S.",
        "Oliver",
        "Immo",
        "Magdalena",
        "Teresa",
        "Alice 1",
        "Alice 2"
      ]
    }
  }
}
</script>