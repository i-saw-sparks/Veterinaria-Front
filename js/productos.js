const body = document.getElementById('body');

(async () => {
    let resp = await get('producto');
    body.innerHTML = '';
    resp.forEach(p => {
        body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-dollar-sign m-2"></i> $${p.precio}
                        <i class="fas fa-box-open m-2"></i> Cantidad: ${p.cantidad}
                        <i class="fas fa-angle-double-right"></i> ${p.tipo}
                    </h6>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-info m-2"></i> ${p.descripcion}
                    </h6>
                    <a href="cliente.html?id=${p.id}" class="card-link btn btn-primary mt-3">
                        Editar producto
                    </a>
                    <a onclick="eliminar(${p.id})" class="card-link btn btn-danger mt-3">
                        Eliminar producto
                    </a>
                
                </div>
            </div>
            `;
    });
})();

function eliminar(id) {
    console.log(id);
}