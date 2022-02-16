function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    const sample = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = randomInt(0, 15);
        newColor += sample[randomIndex];
    }
    return newColor;
}

function createRandomColorArray(size) {
    const colorArray = [];
    for (let i = 0; i < size; i++) {
        colorArray[i] = randomColor();
    }
    return colorArray;
}

export default { 
    createRandomColorArray,
    randomColor,
    randomInt
};

// export const myNumber = 34;
// export const myOtherNumber = 10;
// export const myName = "Bob";
