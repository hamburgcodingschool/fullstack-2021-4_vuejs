<template>
    <h2>MOVIES PAGE</h2>
    <MovieTable @clickTitle="clickedTitle" />
    <MovieDetail v-if="selectedMovie" :movieInfo="selectedMovie" />
    <div v-else>Click something to see the Details</div>
</template>

<script>
import MovieTable from "../components/MovieTable.vue"
import MovieDetail from "../components/MovieDetail.vue"

export default {
    components: {
        MovieTable,
        MovieDetail
    },
    data: function() {
        return {
            selectedMovie: undefined
        }
    },
    methods: {
        clickedTitle(movie) {
           this.selectedMovie = movie;
        }
    }

}
</script>