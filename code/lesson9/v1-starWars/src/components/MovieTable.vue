<template>
     <table>
        <tr>
            <th>title</th>
            <th>release date</th>
            <th>director</th>
            <th></th>
        </tr>
        <tr v-for="(film, index) in films.results" :key="index">
            <td @click="clickedTitleTD(film)">
                Star Wars episode {{ film.episode_id }} - {{ film.title }}
            </td>
            <td>
                {{ film.release_date }}
            </td>
            <td>
                {{ film.director }}
            </td>
            <td>
                <!-- <RouterLink :to="'/movies/' + film.episode_id">more info</RouterLink> -->
                <!-- Doesn't work because of the damn ID not matchint the Episode ID -->
                <!--I guess it would be too easy... -->
                <a href="#" @click="clickedMoreInfo(film)">more info</a>
            </td>
        </tr>
    </table>
</template>


<script>
export default {
    data: function() {
        return {
            films: {}
        }
    },
    emits: ["clickTitle"],
    methods: {
        clickedTitleTD(value) {
            this.$emit("clickTitle", value);
        },
        clickedMoreInfo(film) {
            const array = film.url.split("/");
            // console.log(film.url);
            // console.log(array);

            // It will always be 5 in this very specific case
            // Because all the film URLs have the exact same structure
            // only the number changes
            // which after the array split, is at index 5
            const id = array[5];
            
            // location.href = "/movies/" + id;
            this.$router.push({
                path: "/movies/" + id
            });
        }
    },
    async created() {
        const url = "https://swapi.dev/api/films";
        const response = await fetch(url);
        const result = await response.json();
     
        this.films = result;
    }
}
</script>

<style scoped>
table {
    border: solid 1px black;
    border-spacing: 0;
    border-collapse: collapse;
}

td:first-child {
    /* background-color: pink; */
    cursor: pointer;
}

td:first-child:hover {
    background-color: pink;
}

th, td {
    padding: 10px 15px;
    border: solid 1px black;
}
</style>