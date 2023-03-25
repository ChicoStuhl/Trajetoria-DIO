let listaPokemon = document.getElementById('lista-pokemon');

pokeApi.getAllPokemons(0, 20).then((pokemons) => listaPokemon.innerHTML += pokemons.map(convertPokemonToHtml).join(''));

function convertPokemonTypeToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<p class="move-set${typeSlot.slot}-pokemon">${typeSlot.type.name}</p>`)
}

function convertPokemonToHtml(pokemon) {
    return `
            <li class="lista-pokemon_itens">
                    <p class="numero-pokemon">#${pokemon.id}</p>
                    <p class="nome-pokemon">${pokemon.name}</p>
                    ${convertPokemonTypeToLi(pokemon.types).join('')}
                    <img class="imagem-pokemon" src="${pokemon.sprites.other.dream_world.front_default}" alt="Imagem do pokemon ${pokemon.name}" />
            </li>
        `
}
