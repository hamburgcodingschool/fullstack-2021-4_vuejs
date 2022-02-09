<template>
    <div class="flexbox">
        <img class="image" src="https://www.infomoney.com.br/wp-content/uploads/2019/06/homer-simpson.jpg">
        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid, blanditiis inventore corporis incidunt maxime quo? Dolore aliquid itaque, eius quis facere harum, distinctio nesciunt consequatur, rerum deserunt a fugiat.</div>
    </div>
</template>

<style scoped>

    .flexbox {
        display: flex;
        flex-direction: row;
        gap: 50px;
        padding: 50px;
    }

    .image {
        width: 200px;
        border: solid 2px tomato;
    }

    .text {
        color: darkslateblue;
    }

</style>