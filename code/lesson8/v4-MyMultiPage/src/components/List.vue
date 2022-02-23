<template>
    <div>
        <div>Count: {{ pokemonList.count }}</div>
        <div>Next: {{ pokemonList.next }}</div>
        <div>Prev: {{ pokemonList.previous }}</div>
        <div>
            Results:
            <ul>
                <li v-for="(pokemon, index) in pokemonList.results" :key="index">
                    <RouterLink :to="'/pokemon/' + pokemon.name">{{ pokemon.name}}</RouterLink>
                </li>
            </ul>
        </div>
        <button @click="clickedPrev" :disabled="!pokemonList.previous">PREVIOUS</button>
        <button @click="clickedNext" :disabled="!pokemonList.next">NEXT</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pokemonList: {}
        }
    },
    async created() {
        console.log("Body Component Created");
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const result = await response.json();
        this.pokemonList = result;
    },
    mounted() {
        console.log("Body Component Mounted");
    },
    methods: {
        async clickedPrev() {
            const response = await fetch(this.pokemonList.previous);
            const result = await response.json();
            this.pokemonList = result;
        },
        async clickedNext() {
            const response = await fetch(this.pokemonList.next);
            const result = await response.json();
            this.pokemonList = result;
        },
    }
}
</script>

<style scoped>
button {
    border: solid 5px orange;
    background-color: yellow;
    color: orange;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}
button:disabled {
    opacity: 0.6;
    cursor: default;
}
/* button:hover {
    background-color: #EEEE00;
} */
</style>