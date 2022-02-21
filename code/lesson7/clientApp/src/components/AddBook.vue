<template>
    
    <table border="0">
        <tr>
            <td>Title</td>
            <td><input type="text" placeholder="Title"></td>
        </tr>
        <tr>
            <td>Author</td>
            <td><input type="text" placeholder="Author"></td>
        </tr>
        <tr>
            <td>Description</td>
            <td><textarea placeholder="Author"></textarea></td>
        </tr>
        <tr>
            <td>Publishing Date</td>
            <td><input type="date"></td>
        </tr>
        <tr>
            <td>Type</td>
            <td>
                <select>
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
export default {
    methods: {
        async clickedAddButton() {

            
            // HOMEWORK
            // instead of hardcoding a new Book
            // get the values from the form fields instead
            
            const newBook = {
                title: "My New Book",
                author: "I wrote it...",
                description: "whatever",
                publishingDate: Date(),
                type: "hardcover"
            }

            const url = "http://localhost:8080/newbook";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            });
            const result = await response.json();

            alert(result);
        }
    }
}
</script>