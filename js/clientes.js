const body = document.getElementById('body');

async function loadClientes() {
    let resp = await get('cliente');

    body.innerHTML = '';
    resp.forEach(c => {
        body.innerHTML += `
        <div class="card m-3">
            <div class="card-body">
                <h5 class="card-title">${c.nombre}</h5>
                <h6 class="card-subtitle text-muted">
                    <i class="fas fa-phone-alt mx-2"></i> ${c.telefono}
                    <i class="fas fa-home mx-2"></i> ${c.direccion}
                    <i class="far fa-envelope mx-2"></i> ${c.email}
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
};

(async()=>{
    await loadClientes();
})();

async function eliminar(id) {
    if (confirm('¿Desea borrar este cliente?')) {
        let ok = await deleteRecord('cliente', id);
        if (ok) {
            alertar('El cliente se ha eliminado', 'success');
            await loadClientes();
        } else {
            alertar('No se pudo eliminar al cliente', 'danger');
        }
    }
}