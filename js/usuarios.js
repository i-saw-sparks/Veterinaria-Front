const body = document.getElementById('body');

const loadUsuarios = (async () => {
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
                    <a href="clientes.html?id=${u.id}" class="card-link btn btn-primary mt-3">
                        Editar usuario
                    </a>
                    <a onclick="eliminar(${u.id})" class="card-link btn btn-danger mt-3">
                        Eliminar usuario
                    </a>
                
                </div>
            </div>
            `;
    });
})();

async function eliminar(id) {
    if (confirm('¿Desea borrar este usuario?')) {
        let ok = await deleteRecord('usuario', id);
        if (ok) {
            alertar('El usuario se ha eliminado', 'success');
            loadUsuarios();
        } else {
            alertar('No se pudo eliminar al usuario', 'danger');
        }
    }
}