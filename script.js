document.getElementById("vueloForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const precio = document.getElementById("precio").value;
    const fecha = document.getElementById("fecha").value;

    const vueloBody = document.getElementById("vueloBody2");
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${precio}</td>
        <td>${fecha}</td>
        <td><button class="delete-button">Eliminar</button></td>`;

    fila.querySelector(".delete-button").addEventListener("click", function() {
        vueloBody.removeChild(fila);
    });

    vueloBody.appendChild(fila);
    this.reset();
});


