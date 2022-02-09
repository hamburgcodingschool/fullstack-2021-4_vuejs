<template>
    <div>{{counter}}</div>
    <button @click="clickedGoDown">GO DOWN</button>
    <button @click="clickedGoUp">GO UP</button>
</template>

<script>
export default {
    methods: {
        clickedGoUp() {
            this.counter *= 2;
        },
        clickedGoDown() {
            this.counter /= 2;
        },
    },
    data: function() {
        return {
            counter: 1
        }
    }
}
</script>

<style scoped>
div {
    font-size: 30px;
}
</style>