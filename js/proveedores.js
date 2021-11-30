const body = document.getElementById('body');

(async () => {
    let resp = await get('proveedor');

    body.innerHTML = '';
    resp.forEach(p => {
        body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-phone-alt m-2"></i> ${p.telefono}
                        <i class="fas fa-map-marked m-2"></i> ${p.direccion}
                        <i class="far fa-envelope m-2"></i> ${p.correo}
                    </h6>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-info m-2"></i> ${p.descripcion}
                    </h6>
                    <a href="cliente.html?id=${p.id}" class="card-link btn btn-primary mt-3">
                        Editar proveedor
                    </a>
                    <a onclick="eliminar(${p.id})" class="card-link btn btn-danger mt-3">
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