// index.js
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, JS del frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener personajes de la API de Rick and Morty
app.get('/api/characters', async (req, res) => {
    try {
        // URL de la API de Rick and Morty para personajes
        const apiUrl = 'https://rickandmortyapi.com/api/character';

        // Realizar la petición a la API externa usando axios
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Enviar los datos obtenidos al frontend
        res.json(data);
    } catch (error) {
        console.error('Error al consumir la API de Rick and Morty:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos de la API externa' });
    }
});


/*
const data = {
    itemName: 'buscaNrecipe',
    itemRating: '120',
}

//https://script.google.com/macros/s/AKfycbwkpznFmi7VaU2sYjQN36mRHqQMoN5uCwWnqxuE39EY-WcYcneH7y8lCyrFHXBrlnIN/exec

// Endpoint para obtener datos de la private API
app.post('exec', async (req, res) => {
    try {
        // URL de la API de Rick and Morty para personajes
        const apiUrl = 'https://script.google.com/macros/s/AKfycbzXBQ4GOcwIn6c9nOLN4tvPsBia9b4NyidOm43_WKrNgUdHv-GqiUtIa-DA4lJl8mNE/';

        // Realizar la petición a la API externa usando axios
        const response = await axios.post(apiUrl, data);
        const data = response.data;

        console.log('Success (Axios):', response.data);
        
        // Enviar los datos obtenidos al frontend
        //res.json(data);
    } catch (error) {
        console.error('Error al consumir la API de Rick and Morty:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos de la API externa' });
    }
});
*/

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
