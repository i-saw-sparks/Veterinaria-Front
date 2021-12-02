const body = document.getElementById('body');

const loadMascotas = async () => {
    let resp = await get('mascota');
        body.innerHTML = '';
        resp.forEach(m => {
            fecha = m.fecha_nacimiento.substring(0, m.fecha_nacimiento.indexOf('T'));
            m.nombreCliente = (clientes.find(c => c.id == m.id_cliente) || {})['nombre'] || 'Sin dueño';
            body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${ m.nombre }</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="far fa-calendar-alt m-2"></i><b>Fecha de nacimiento: </b>${ fecha }
                        <i class="fas fa-paw m-2"></i><b>Especie: </b>${ m.especie }
                    </h6>
                    <h6 class="card-subtitle text-muted">
                    <a href="cliente-detalles.html?id=${m.id_cliente}"><i class="fas fa-user m-2"></i> ${m.nombreCliente}</a>      
                    </h6>
                    <a href="mascotas_detalles.html?id=${ m.id }" class="card-link btn btn-secondary mt-3">
                        Ver detalles
                    </a>
                    <a href="new-mascota.html?id=${ m.id }" class="card-link btn btn-primary mt-3">
                        Editar mascota
                    </a>
                    <a onclick="eliminar(${ m.id })" class="card-link btn btn-danger mt-3">
                        Eliminar mascota
                    </a>
                    <a href="new-registro.html?id_mascota=${ m.id }" class="card-link btn btn-success mt-3">
                        Añadir registro
                    </a>
                </div>
            </div>
            `;
        });
}

(async()=>{
    clientes = await get('cliente');
    await loadMascotas();
})();

async function eliminar(id) {
    if (confirm('¿Desea borrar esta mascota?')) {
        let ok = await deleteRecord('mascota', id);
        if (ok) {
            alertar('La mascota se ha eliminado', 'success');
            await loadMascotas();
        } else {
            alertar('No se pudo eliminar la mascota', 'danger');
        }
    }
}