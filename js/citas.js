const body = document.getElementById('body');

const loadCitas = async () => {
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
                <a href="new-cita.html?id=${c.id}" class="card-link btn btn-primary mt-3">
                    Editar cita
                </a>
                <a onclick="eliminar(${c.id})" class="card-link btn btn-danger mt-3">
                    Eliminar cita
                </a>
            
            </div>
        </div>
        `;
    });
}

(async()=>{
    await loadCitas();
})();

async function eliminar(id) {
    if (confirm('¿Desea borrar esta cita?')) {
        let ok = await deleteRecord('cita', id);
        if (ok) {
            alertar('La cita se ha eliminado', 'success');
            await loadCitas();
        } else {
            alertar('No se pudo eliminar la cita', 'danger');
        }
    }
}