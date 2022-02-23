<template>
    Hello
    <div class="detail">
        <h3>{{ $route.params.pokemonName }}</h3>
        <h2>Details</h2>
        <h3>Height: {{ pokemonDetails.height }}</h3>
        <h3>Weight: {{ pokemonDetails.weight }}</h3>
        <h3>Name: {{ pokemonDetails.name }}</h3>
        <h3>Image Source: {{ pokemonDetails.sprites?.other["official-artwork"].front_default }}</h3>
        <img :src="pokemonDetails.sprites?.other['official-artwork'].front_default" >
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pokemonDetails: {}
        }
    },
    async created() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.$route.params.pokemonName);
        const result = await response.json();
        
        this.pokemonDetails = result;

        console.log(result);
    }
}
</script>

<style scoped>
.detail {
  background-color: pink;
  border: solid 5px red;
  width: 500px;
}
</style>