<template>
    <h3>Star Wars episode {{ movieInfo.episode_id }} - {{ movieInfo.title }}</h3>
    <p>Directed by: {{ movieInfo.director }}</p>
    <p>Released on: {{ movieInfo.release_date }}</p>
    <h4>Opening</h4>
    <p>{{ movieInfo.opening_crawl }}</p>
    <h4>Characters:</h4>
    <ul>
        <li v-for="(character, index) in characters" :key="index">{{character}}</li>
    </ul>
</template>

<script>
export default {
    props: ["movieInfo"],
    data: function() {
        return {
            characters: []
        }
    },
    watch: {
        movieInfo() {
            this.fetchCharacters();    
        }
    },
    mounted() {
        this.fetchCharacters();
    },
    methods: {
        async fetchCharacters() {
            this.characters = [];
            for (let i = 0; i < this.movieInfo.characters.length; i++) {
                const characterUrl = this.movieInfo.characters[i];
                const response = await fetch(characterUrl);
                const result = await response.json();

                this.characters.push(result.name);
            }   
        }
    }
}
</script>