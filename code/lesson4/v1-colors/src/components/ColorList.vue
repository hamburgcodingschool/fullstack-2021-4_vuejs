<template>
    <div class="circleContainer">
        <ColorCircle
            v-for="(element, index) in colors"
            :key="index"
            :color="element"
            @click="clickedCircle(element)"
        />

        <!--
        <ColorCircle color="red" />
        <ColorCircle color="green" />
        <ColorCircle color="blue" />
        <ColorCircle color="#FF0" />
        <ColorCircle color="#F0F" />
        <ColorCircle color="#0FF" />
        -->
        
        <!-- 
        <div
            class="circle"
            :style="{ backgroundColor: element }"
            v-for="(element, index) in colors"
            :key="index"
        >{{ element }}</div>
        -->

        <!--
        <div class="circle" style="background-color: red">circle 1</div>
        <div class="circle" style="background-color: green">circle 2</div>
        <div class="circle" style="background-color: blue">circle 3</div>
        <div class="circle" style="background-color: tomato">4th circle</div>
        -->
    </div>
    
</template>

<script>
import ColorCircle from "./ColorCircle.vue";

export default {
    components: {
        ColorCircle
    },
    props: ["colors"],
    emits: ["clickCircle"],
    methods: {
        clickedCircle(color) {
            this.$emit("clickCircle", color);
        }
    }
}
</script>

<style scoped>
.circleContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
}

/*
.circle {
    width: 75px;
    height: 75px;
    background-color: pink;
    border-radius: 50%;
    text-align: center;
    line-height: 75px;
    border: solid 5px black;
}

.circle:nth-child(even) {
    border-color: gray;
    color: gray;
}
*/

</style>