<template>
    <div :style="{backgroundColor: color}">
        Color Preview
    </div>
</template>

<script>
export default {
    props: ["color"]
}
</script>

<style scoped>
div {
    max-width: 500px;
    height: 200px;
    border: solid 5px black;
}
</style>