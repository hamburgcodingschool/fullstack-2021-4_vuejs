<template>
    <p>{{name}}</p>
</template>

<script>
export default {
    props: ["name"]
}
</script>

<style scoped>
p {
    font-size: 24px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #333;
}
</style>