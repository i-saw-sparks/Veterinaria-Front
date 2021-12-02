const body = document.getElementById('body');

const loadInsumos = async () => {
    let resp = await get('insumo');
    var tipo = localStorage.getItem("tipo");

    body.innerHTML = '';
    displayItems = '';
    resp.forEach(i => {
        displayItems += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${i.nombre}</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-dollar-sign m-2"></i> $${i.precio}
                        <i class="fas fa-box-open m-2"></i> Cantidad: ${i.cantidad}
                        <i class="fas fa-angle-double-right m-2"></i> Tipo: ${i.tipo}
                    </h6>
            `
            if(tipo == 1 || tipo == 2){
                displayItems += `
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-info m-2"></i> ${i.descripcion}
                    </h6>
                    <a href="new-insumo.html?id=${i.id}" class="card-link btn btn-primary mt-3">
                        Editar insumo
                    </a>
                    <a onclick="eliminar(${i.id})" class="card-link btn btn-danger mt-3">
                        Eliminar insumo
                    </a>
                `
            }
        displayItems += '</div></div>';
    });
    body.innerHTML += displayItems;
}

(async()=>{
    await loadInsumos();
})();

async function eliminar(id) {
    if (confirm('¿Desea borrar este insumo?')) {
        let ok = await deleteRecord('insumo', id);
        if (ok) {
            alertar('El insumo se ha eliminado', 'success');
            await loadInsumos();
        } else {
            alertar('No se pudo eliminar el insumo', 'danger');
        }
    }
}