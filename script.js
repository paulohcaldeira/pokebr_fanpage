function filterPokemons() {
    // Obtém o valor digitado pelo usuário
    let searchInput = document.getElementById('searchBar').value.toLowerCase();
    
    // Seleciona todos os cards de Pokémon
    let pokemons = document.querySelectorAll('.pokemon');
    
    // Itera por cada Pokémon para verificar se o nome ou tipo corresponde à pesquisa
    pokemons.forEach(function(pokemon) {
        let name = pokemon.getAttribute('data-name');
        let type = pokemon.getAttribute('data-type');
        
        // Verifica se o nome ou tipo contém o texto pesquisado
        if (name.includes(searchInput) || type.includes(searchInput)) {
            pokemon.style.display = 'block'; // Exibe o Pokémon
        } else {
            pokemon.style.display = 'none'; // Esconde o Pokémon
        }
    });
}

  // Função para abrir o modal com as informações do Pokémon
function showPokemonDetails(name, image, type, description) {
    // Define os valores do modal
    document.getElementById('pokemonName').textContent = name;
    document.getElementById('pokemonImage').src = image;
    document.getElementById('pokemonType').textContent = "Tipo: " + type;
    document.getElementById('pokemonDescription').textContent = description;
    
    // Exibe o modal
    document.getElementById('pokemonModal').style.display = "block";
}

// Fecha o modal ao clicar no botão de fechar
document.querySelector('.close').onclick = function() {
    document.getElementById('pokemonModal').style.display = "none";
}

// Fecha o modal se clicar fora da área de conteúdo
window.onclick = function(event) {
    if (event.target == document.getElementById('pokemonModal')) {
        document.getElementById('pokemonModal').style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pokemons = document.querySelectorAll('.pokemon');
    pokemons.forEach((pokemon, index) => {
        // Animação de entrada com delay para cada Pokémon
        pokemon.style.opacity = 0;
        setTimeout(() => {
            pokemon.style.transition = 'opacity 0.6s ease';
            pokemon.style.opacity = 1;
        }, index * 100); // Delay baseado na posição do Pokémon
    });
});