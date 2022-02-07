<template>
    <div class="block">
        <h3>{{title}}</h3>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    props: ["title", "text"],
}
</script>


<style scoped>
    .block {
        width: 200px;
        height: 200px;
        padding: 20px;
        background-color: tomato;
    }

    h3 {
        color: bisque;
    }

    p {
        color: burlywood;
    }
</style>