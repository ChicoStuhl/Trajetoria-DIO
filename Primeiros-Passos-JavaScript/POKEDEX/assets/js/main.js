let listaPokemon = document.getElementById('lista-pokemon');
let loadMorePokemon = document.getElementById('next-button');

let offsetBase = 0;
let limitBase = 10;

function loadPokemonItens(offset, limit) {
    function convertPokemonToHtml(pokemon) {
        console.log(pokemon);
        return `
                <li class="lista-pokemon_itens color-type-${pokemon.types[0]}">
                        <p class="numero-pokemon">#${pokemon.order}</p>
                        <p class="nome-pokemon">${pokemon.name}</p>
                        ${pokemon.types.map((type, x) => `<p class="move-set${x + 1}-pokemon">${type}</p>`).join('')}
                        <img class="imagem-pokemon" src="${pokemon.image}" alt="Imagem do pokemon ${pokemon.name}" />
                </li>
            `
    }
    pokeApi.getAllPokemons(offset, limit).then((pokemons = []) => {
        let newHTML = pokemons.map(convertPokemonToHtml).join('');
        listaPokemon.innerHTML += newHTML;
    });
}

loadPokemonItens(offsetBase, limitBase);

loadMorePokemon.addEventListener('click', () => {
    offsetBase += 10;
    limitBase += 10;
    loadPokemonItens(offsetBase, limitBase);
})

pokeApi.getAllPokemons(offsetBase, limitBase).then((pokemons) => listaPokemon.innerHTML += pokemons.map(convertPokemonToHtml).join(''));
