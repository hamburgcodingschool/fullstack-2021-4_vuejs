const axios = require('axios');

async function root(req, res) {
    // res.json("THIS IS THE ROOT");
    
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");

    const mySimplePokemon = {
        name: result.data.name,
        id: result.data.id,
        image: result.data.sprites.other["official-artwork"].front_default
    };

    console.log(mySimplePokemon)

    res.json(mySimplePokemon);
}

function hello(req, res) {

    const myEnvVar = process.env.MY_ENV_VAR || "default valuee";

    res.json(`this is an environment variable: ${myEnvVar}`);

}

module.exports = {
    root,
    hello
}
