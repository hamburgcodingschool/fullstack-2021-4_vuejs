<template>
    <div>
        <div>Count: {{ pokemonList.count }}</div>
        <div>Next: {{ pokemonList.next }}</div>
        <div>Prev: {{ pokemonList.previous }}</div>
        <!-- <div>Results: {{ pokemonList.results }}</div> -->
        <div>
            Results:
            <ul>
                <li v-for="(pokemon, index) in pokemonList.results" :key="index">
                    <a href="#" @click="clickedLink(pokemon)">{{ pokemon.name }}</a>
                </li>
                <!--             
                <li>{{ pokemonList.results[0].name }}</li>
                <li>{{ pokemonList.results[1].name }}</li>
                <li>{{ pokemonList.results[2].name }}</li>
                <li>{{ pokemonList.results[3].name }}</li>
                <li>{{ pokemonList.results[4].name }}</li>
                <li>{{ pokemonList.results[5].name }}</li>
                <li>{{ pokemonList.results[6].name }}</li> 
                -->
            </ul>
        </div>
        <button @click="clickedPrev" :disabled="!pokemonList.previous">PREVIOUS</button>
        <button @click="clickedNext" :disabled="!pokemonList.next">NEXT</button>
    </div>
</template>

<script>

// function normalFunction() {
//     return "Hello";
// }

// async function asynchronousFunction() {
//     return "Hello";
// }

// function promiseFunction() {
//     return new Promise(function(resolve, reject) {
//         resolve("Hello");
//     });
// }

// someButton.addEventListener("click", async function() {
//     someButton.style.color = "red";
//     someButton.innerHTML = "HELLO";
// });


// const x = [2, 3, 4, 5, 6, 7, 30, 12, 12, 4, 5];
// x.filter(async function(value) {
//     if (value > 10) {
//         return false;
//     }
//     return true;
// });

export default {
    data: function() {
        return {
            pokemonList: {}
        }
    },
    emits: [
        "clickLink"
    ],
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
        clickedLink(pokemon) {
            // alert(value.name);
            // alert(value.url);
            this.$emit("clickLink", pokemon);
        }
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