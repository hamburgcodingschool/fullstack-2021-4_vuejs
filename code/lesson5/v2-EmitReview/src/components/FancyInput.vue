<template>
    <input type="text" @input="textChanged">
    <div>Number of characters: {{ numberOfChars }}</div>
</template>

<script>
export default {
    data: function() {
        return {
            numberOfChars: 0
        }
    },
    emits: ["changeToFive"],
    methods: {
        textChanged(event) {
            const text = event.target.value;
            this.numberOfChars = text.length;

            if (text.length == 5) {
                this.$emit("changeToFive");
            }
        }
    }
}
</script>

<style scoped>
input {
    background-color: pink;
}
</style>