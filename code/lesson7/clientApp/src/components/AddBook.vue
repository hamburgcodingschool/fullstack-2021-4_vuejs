<template>
    
    <table border="0">
        <tr>
            <td>Title</td>
            <td><input type="text" placeholder="Title" v-model="title"></td>
        </tr>
        <tr>
            <td>Author</td>
            <td><input type="text" placeholder="Author" v-model="author"></td>
        </tr>
        <tr>
            <td>Description</td>
            <td><textarea placeholder="Author" v-model="description"></textarea></td>
        </tr>
        <tr>
            <td>Publishing Date</td>
            <td><input type="date" v-model="publishingDate"></td>
        </tr>
        <tr>
            <td>Type</td>
            <td>
                <select v-model="type">
                    <option value="paperback">Paperback</option>
                    <option value="hardcover">Hardcover</option>
                </select>
            </td>
        </tr>
    </table>
    <br>
    <br>
    <button @click="clickedAddButton">Add Book</button>
    
</template>

<script>
import booksApi from "../services/booksAPI";

export default {
    data: function() {
        return {
            title: "",
            author: "",
            description: "",
            publishingDate: "",
            type:"hardcover"
        }
    },
    methods: {
        async clickedAddButton() {

            const newBook = {
                title: this.title,
                author: this.author,
                description: this.description,
                publishingDate: this.publishingDate,
                type: this.type
            }

            const result = await booksApi.addBook(newBook);

            alert(result);
        }
    }
}
</script>