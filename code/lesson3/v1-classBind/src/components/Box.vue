<template>
    <div class="redBox" :class="{greenText: showGreenText}">
        Hello I am box...
        SHOW GREEN TEXT IS {{showGreenText}}
    </div>
</template>

<script>
export default {
    props: ["showGreenText"]
}
</script>

<style scoped>
.redBox {
    width: 200px;
    height: 200px;
    background-color: red;

    padding: 20px;
}

.greenText {
    color: green;
    font-size: 24px;
}
</style>