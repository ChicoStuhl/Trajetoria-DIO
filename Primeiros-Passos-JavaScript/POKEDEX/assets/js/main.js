
const urlBase = "https://pokeapi.co/api/v2/pokemon";
let offset = 0;
let limit = 10;
let urlComplete = urlBase + "?" + "offset=" + offset + "&" + "limit=" + limit;

let listaPokemon = document.getElementById('lista-pokemon');

fetch(urlComplete)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            listaPokemon.innerHTML += convertPokemonToHtml(pokemons[i]); //;
        }})
    .catch((error) => console.error(error));


console.log(10+10);

function convertPokemonToHtml(pokemon) {
    return `
            <li class="lista-pokemon_itens">
                    <p class="numero-pokemon">#001</p>
                    <p class="nome-pokemon">${pokemon.name}</p>
                    <p class="move-set1-pokemon">grass</p>
                    <p class="move-set2-pokemon">attack</p>
                    <img class="imagem-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Imagem do pokemon n tal" />
            </li>
        `
}
