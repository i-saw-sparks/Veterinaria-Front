const body = document.getElementById('body');

(async () => {
    let resp = await get('usuario');

    body.innerHTML = '';
    resp.forEach(u => {
        body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${u.nombre}</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="far fa-calendar-alt m-2"></i> Horario: ${u.horario}
                        <i class="far fa-user-circle m-2"></i> Permisos: ${u.permisos}
                    </h6>
                    <a href="cliente.html?id=${u.id}" class="card-link btn btn-primary mt-3">
                        Editar proveedor
                    </a>
                    <a onclick="eliminar(${u.id})" class="card-link btn btn-danger mt-3">
                        Eliminar proveedor
                    </a>
                
                </div>
            </div>
            `;
    });
})();

function eliminar(id) {
    console.log(id);
}