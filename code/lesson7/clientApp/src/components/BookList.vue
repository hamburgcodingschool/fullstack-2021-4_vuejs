<template>
    <table border="1">
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Publishing Date</th>
            <th>Type</th>
        </tr>
        <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.description }}</td>
            <td>{{ book.publishingDate }}</td>
            <td>{{ book.type }}</td>
        </tr>
    </table>
</template>

<script>
export default {
    data: function() {
        return {
            books: []
        }
    },
    created: async function() {
        // alert("CREATED, LET's FETCH!");
        const url = "http://localhost:8080/";
        const response = await fetch(url);
        const result = await response.json();

        this.books = result;

        // console.log(result);

    },
    mounted: function() {
        // alert("NOW ITS MOUNTED TOO");
    }
}
</script>