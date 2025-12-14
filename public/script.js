async function buscarIcono() {
    const inputElement = document.getElementById('thingInput');
    const container = document.getElementById('iconContainer');
    const thingName = inputElement.value.trim();

    if (!thingName) {
        container.innerHTML = '<p>Por favor, introduce un nombre.</p>';
        return;
    }

    try {
        const response = await fetch('/get-icon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: thingName })
        });

        const data = await response.json();

        container.innerHTML = ''; // Limpiar el contenedor anterior

        if (data.success) {
            // Mostrar la imagen del icono
            const img = document.createElement('img');
            img.src = data.iconUrl;
            img.alt = thingName;
            img.classList.add('displayed-icon'); // Para aplicar estilos CSS
            container.appendChild(img);
        } else {
            // Mostrar mensaje de error/no encontrado
            container.innerHTML = `<p style="color: red;">${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error al buscar el icono:', error);
        container.innerHTML = '<p style="color: red;">Ocurrió un error en el servidor.</p>';
    }
}