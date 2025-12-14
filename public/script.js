/*
// Función para consumir nuestra API de Node.js
async function fetchCharacters() {
    try {
        // Petición a nuestro endpoint local /api/characters
        const response = await fetch('/api/characters');
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API local');
        }
        const data = await response.json();

        displayCharacters(data.results);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}
*/

async function fetchCharacters() {
    try {
        // Petición a nuestro endpoint local /api/characters
        const response = await fetch('exec');
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API local');
        }
        const data = await response.json();

        displayCharacters(data.results);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}

// Función para mostrar los personajes en el HTML
function displayCharacters(characters) {
    const container = document.getElementById('characters-container');
    container.innerHTML = ''; // Limpiar contenedor
    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            <p>Especie: ${character.species}</p>
            <p>Estado: ${character.status}</p>
        `;
        container.appendChild(card);
    });
}

// Llamar a la función al cargar la página
fetchCharacters();
