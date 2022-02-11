<template>
    <h1>Exercise</h1>
    <div class="colorDiv" :class="{niceBorder: isCheckedBorder, niceBackground: isCheckedBackground}">
        THE BORDER CHECKBOX IS ON: {{ isCheckedBorder }}
        <br>
        THE BACKGROUND CHECKBOX IS ON: {{ isCheckedBackground }}
    </div>
    <label>
        Add a nice border: 
        <input type="checkbox" @change="changedBorderCheckbox">
    </label>
    <label>
        Add a nice background: 
        <input type="checkbox" @change="changedBackgroundCheckbox">
    </label>
</template>

<script>
export default {
    data: function() {
        return {
            isCheckedBorder: false,
            isCheckedBackground: false
        }
    },
    methods: {
        changedBorderCheckbox(event) {
            this.isCheckedBorder = event.target.checked;
        },
        changedBackgroundCheckbox(event) {
            this.isCheckedBackground = event.target.checked;
        }
    }
}
</script>

<style scoped>
.colorDiv {
    background-color: green;
    width: 200px;
    height: 200px;
    border: solid 15px green;
}

.niceBorder {
    border: dotted 15px pink;
}

.niceBackground {
    background-image: url(https://i.pinimg.com/originals/a7/49/46/a749467c83f8d4b35ee5f246ee9a5339.png);
    background-size: cover;
    background-position: center;

    color: white;
}
</style>