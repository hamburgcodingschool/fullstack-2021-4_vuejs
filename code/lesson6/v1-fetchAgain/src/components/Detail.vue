<template>
    <div class="detail">
        <h3>{{ pokemon.name }}</h3>
        <h3>{{ pokemon.url }}</h3>
        <h3>{{ pokemonDetails.height }}</h3>
        <h3>{{ pokemonDetails.weight }}</h3>
        <h3>{{ pokemonDetails.name }}</h3>
        <h3>{{ pokemonDetails.sprites?.other["official-artwork"].front_default }}</h3>
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
    props: ["pokemon"],
    watch: {
        async pokemon() {
            const response = await fetch(this.pokemon.url);
            const result = await response.json();
            
            this.pokemonDetails = result;

            console.log(result);
        }
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