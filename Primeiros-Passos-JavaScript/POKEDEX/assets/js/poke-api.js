

const pokeApi = {};

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getAllPokemons = (offset = 0, limit = 10) => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon";
    let urlComplete = urlBase + "?" + "offset=" + offset + "&" + "limit=" + limit;
    
    return fetch(urlComplete)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonDetails) => pokemonDetails.map(pokeApi.getPokemonDetails))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((detailResponse) => detailResponse)
    .catch((error) => console.error(error));
}