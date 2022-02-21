<template>
  <BookList />
  <br>
  <br>
  <br>
  <AddBook />
</template>

<script>

import BookList from "./components/BookList.vue";
import AddBook from "./components/AddBook.vue";

export default {
  components: {
    BookList,
    AddBook
  }  
}
</script>