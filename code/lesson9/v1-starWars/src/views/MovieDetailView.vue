<template>
    <h2>MOVIE DETAILS</h2>
    <MovieDetail v-if="!notFound" :movieInfo="movieInfo" />
    <div v-else>Wrong URL that Movie does not exist</div>
</template>

<script>
import MovieDetail from "../components/MovieDetail.vue";

export default {
    components: {
        MovieDetail
    },
    data: function() {
        return {
            notFound: false,
            movieInfo: {}
        }
    },
    async mounted() {
        const movieId = this.$route.params.movieId;
        const url = "https://swapi.dev/api/films/" + movieId;

        const response = await fetch(url);
        const result = await response.json();

        if (result.detail == "Not found") {
            // alert("Movie Not found!");
            this.notFound = true;
        } else {
            // alert("Movie DOUNF");
            this.movieInfo = result;
        }
        console.log(url);
        console.log(response);
        console.log(result);
    }
}
</script>