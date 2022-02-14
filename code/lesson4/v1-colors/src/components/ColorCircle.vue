<template>
    <div
        class="circle"
        :style="{backgroundColor: color}"
    >{{color}}</div>
</template>

<script>
export default {
    props: ["color"],
}
</script>

<style scoped>
.circle {
    width: 75px;
    height: 75px;
    background-color: pink;
    border-radius: 50%;
    text-align: center;
    line-height: 75px;
    border: solid 5px black;
    cursor: pointer;
}

.circle:nth-child(even) {
    border-color: gray;
    color: gray;
}
</style>