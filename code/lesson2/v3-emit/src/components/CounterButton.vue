<template>
    <button @click="clickedButton">{{text}}</button>
</template>

<script>
export default {
    props: ["text"],
    emits: ["click"],
    methods: {
        clickedButton() {
            this.$emit("click");
        }
    }
}
</script>