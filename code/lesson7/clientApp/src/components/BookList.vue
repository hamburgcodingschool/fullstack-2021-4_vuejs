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
import booksApi from "../services/booksAPI";

export default {
    data: function() {
        return {
            books: []
        }
    },
    created: async function() {
        // alert("CREATED, LET's FETCH!");
        
        this.books = await booksApi.getAllBooks();
    },
    mounted: function() {
        // alert("NOW ITS MOUNTED TOO");
    }
}
</script>