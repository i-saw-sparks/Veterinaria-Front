const body = document.getElementById('body');

(async () => {
    let resp = await get('cita');
    body.innerHTML = '';
    resp.forEach(c => {
        body.innerHTML += `
        <div class="card m-3">
            <div class="card-body">
                <h5 class="card-title">${c.tipo}</h5>
                <h6 class="card-subtitle text-muted">
                    <i class="fas fa-clock m-2"></i> ${c.hora_inicio}
                    <i class="far fa-clock m-2"></i> ${c.hora_fin}
                </h6>
                <h6 class="card-subtitle text-muted">
                    <i class="fas fa-user m-2"></i> ${c.nombreCliente}
                    <i class="fas fa-paw m-2"></i> ${c.nombreMascota}
                </h6>
                <a href="cliente.html?id=${c.id}" class="card-link btn btn-primary mt-3">
                    Editar detalles
                </a>
                <a onclick="eliminar(${c.id})" class="card-link btn btn-danger mt-3">
                    Eliminar cliente
                </a>
            
            </div>
        </div>
        `;
    });
})();

function eliminar(id) {
    console.log(id);
}