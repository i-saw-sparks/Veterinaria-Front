const body = document.getElementById('body');

const loadUsuarios = async () => {
    let resp = await get('usuario');
    var t_usuario = '';

    body.innerHTML = '';
    resp.forEach(u => {
        t_usuario = cambiarTipoUsuario(u.tipo_usuario);
        n_horario = cambiarHorario(u.horario);
        body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${u.nombre}</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="far fa-calendar-alt m-2"></i> Horario: ${n_horario}
                        <i class="far fa-user-circle m-2"></i> Tipo de usuario: ${t_usuario}
                    </h6>
                    <a href="new-usuario.html?id=${u.id}" class="card-link btn btn-primary mt-3">
                        Editar usuario
                    </a>
                    <a onclick="eliminar(${u.id})" class="card-link btn btn-danger mt-3">
                        Eliminar usuario
                    </a>
                
                </div>
            </div>
            `;
    });
}

(async()=>{
    await loadUsuarios();
})();

function cambiarTipoUsuario(tipo_usuario){
    if(tipo_usuario == 1)
        t_usuario = 'Administrador';
    else if(tipo_usuario == 2)
        t_usuario = 'Privilegiado';
    else
        t_usuario = 'Normal';
    return t_usuario
}

function cambiarHorario(horario){
    let array = ['L','M','M','J','V','S','D'];
    let n_horario = [];
    for (let index = 0; index < array.length; index++) {
        if(horario[index] == 1)
            n_horario[index] = array[index];
        else
            n_horario[index] = "-";
    }
    return n_horario;
}

async function eliminar(id) {
    if (confirm('¿Desea borrar este usuario?')) {
        let ok = await deleteRecord('usuario', id);
        if (ok) {
            alertar('El usuario se ha eliminado', 'success');
            await loadUsuarios();
        } else {
            alertar('No se pudo eliminar al usuario', 'danger');
        }
    }
}