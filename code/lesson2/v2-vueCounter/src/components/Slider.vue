<template>
    <div>Slider Value: {{sliderValue}}</div>
    <input type="range" min="0" max="100" @input="changedSlider">
</template>

<script>
export default {
    data: function() {
        return {
            sliderValue: 0,
        }
    },
    methods: {
        changedSlider(event) {
            // const value = event.target.value;
            // console.log(value);
            // this.sliderValue = value;
            this.sliderValue = event.target.value;
        }
    }
}

// STEP 1
// Don't write any code, just make sure the Slider shows up in the webpage

// STEP 2
// Try to figure out what event the slider responds to... it's probably not click :D

// STEP 3
// On the Event Handler Method
// User console.log to try and read the slider value

// STEP 4
// Connect the slider value to a data variable, sit back and watch the magic happen 🪄

</script>
