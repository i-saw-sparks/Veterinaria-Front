const body = document.getElementById('body');

(async () => {
    let resp = await get('insumo');

    body.innerHTML = '';
    resp.forEach(i => {
        body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${i.nombre}</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-dollar-sign m-2"></i> $${i.precio}
                        <i class="fas fa-box-open m-2"></i> Cantidad: ${i.precio}
                        <i class="fas fa-angle-double-right m-2"></i> Tipo: ${i.tipo}
                    </h6>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-info m-2"></i> ${i.descripcion}
                    </h6>
                    <a href="cliente.html?id=${i.id}" class="card-link btn btn-primary mt-3">
                        Editar insumo
                    </a>
                    <a onclick="eliminar(${i.id})" class="card-link btn btn-danger mt-3">
                        Eliminar insumo
                    </a>
                
                </div>
            </div>
            `;
    });
})();

function eliminar(id) {
    console.log(id);
}