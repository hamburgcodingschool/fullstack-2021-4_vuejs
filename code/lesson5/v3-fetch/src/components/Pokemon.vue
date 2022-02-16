<template>
    <h1>POKEMON</h1>
    <div>Name: {{ pikachu.name }}</div>
    <div>Height: {{ pikachu.height }}</div>
    <div>Weight: {{ pikachu.weight }}</div>

    <button @click="buttonClicked">Get Pikachu</button>
</template>

<script>
export default {
    data: function() {
        return {
            pikachu: {}
        }
    },
    methods: {
        async buttonClicked() {
            
            const url = "https://pokeapi.co/api/v2/pokemon/25";
            // const promise = fetch(url);
            // promise.then(function() {
            //     alert("got some info back for you, sorry it took this long but everything is here")
            // });
            // promise.catch(function() {
            //     alert("something went wrong")
            // });

            // fetch(url).then(function(value) {
            //     // alert(value);
            //     // console.log(value);
                
            //     value.json().then(function(body) {
            //         console.log(body)
            //     })

            // }).catch(function(error) {
            //     alert(error);
            // })

            const response = await fetch(url);
            const result = await response.json();

            console.log(result);

            this.pikachu = result;
        }
    }
}
</script>