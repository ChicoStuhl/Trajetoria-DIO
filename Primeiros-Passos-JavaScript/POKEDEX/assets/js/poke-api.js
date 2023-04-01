

const pokeApi = {};

function convertPokemonDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.order = pokeDetail.order;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const {type} = types

    pokemon.types = types
    pokemon.type = type;

    pokemon.image = pokeDetail.sprites.other.dream_world.front_default

    return pokemon;
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokemonDetailToPokemon);
}

pokeApi.getAllPokemons = (offset = 0, limit = 10) => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon";
    let urlComplete = urlBase + "?" + "offset=" + offset + "&" + "limit=" + limit;
    
    return fetch(urlComplete)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((detailResponse) => detailResponse);
}