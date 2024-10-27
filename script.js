document.getElementById('vueloForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const horaSalida = document.getElementById('horaSalida').value;

    const listaVuelos = document.getElementById('listaVuelos');
    const nuevoVuelo = document.createElement('li');
    
    nuevoVuelo.textContent = `Código: ${codigo}, Origen: ${origen}, Destino: ${destino}, Hora de Salida: ${horaSalida}`;
    listaVuelos.appendChild(nuevoVuelo);

    // Limpiar el formulario
    this.reset();
});
