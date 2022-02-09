<template>
    <div>{{counter}}</div>
    <button @click="clickedGoUp">GO UP</button>
</template>

<script>
export default {
    methods: {
        clickedGoUp() {
            this.counter ++;
        }
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