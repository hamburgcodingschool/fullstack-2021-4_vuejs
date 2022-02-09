<template>
    <!-- STATIC PROPS -->
    <!-- <CounterLabel value="counterValue" /> -->

    <!-- DYNAMIC PROPS -->
    <CounterLabel :value="counterValue" />
    
    <CounterButton text="Go Down" @click="clickedDown" />
    <CounterButton text="Go Up" @click="clickedUp" />
</template>

<script>
import CounterLabel from "./CounterLabel.vue";
import CounterButton from "./CounterButton.vue";

export default {
    components: {
        CounterLabel,
        CounterButton
    },
    data: function() {
        return {
            counterValue: 0
        }
    },
    methods: {
        clickedDown() {
            this.counterValue --;
        },
        clickedUp() {
            this.counterValue ++;
        }
    }
}
</script>