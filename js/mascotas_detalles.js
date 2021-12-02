const body = document.getElementById('body');
let usuarios;

function getId() {
    const queryString = window.location.search;

    if (queryString == '') {
        return '';
    } else {

        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('id') || '';
    }
}

const loadMascota = async () => {
    let resp = await get('mascota');
    let regs = await get('registro');
    body.innerHTML = '';
    infoMascota = '';
    infoRegistros = '';
    resp.forEach(m => {
        if (m.id == getId()) {
            fecha = m.fecha_nacimiento.substring(0, m.fecha_nacimiento.indexOf('T'));
            m.nombreCliente = (clientes.find(c => c.id == m.id_cliente) || {})['nombre'] || 'Administrador';
            infoMascota += `
                <div class="card m-5">
                    <div class="card-body">
                        <h2 class="card-title"><b>${m.nombre}</b> 🐶</h2>
                        <h5 class="card-subtitle">
                            <i class="fas fa-paw m-4"></i><b>Especie:</b> ${m.especie}
                        </h5>
                        <h5 class="card-subtitle">
                            <i class="fas fa-user m-4"></i><b>Dueño:</b> ${m.nombreCliente}
                        </h5>
                        <h5 class="card-subtitle">
                            <i class="far fa-calendar-alt m-4"></i><b>Fecha de nacimiento:</b> ${fecha}
                        </h5>
                    </div>
                </div>
            `;
        }
    });
    var cont = 0;
    regs.forEach(r => {
        if (r.id_mascota == getId()){
            fecha = r.fecha.substring(0, r.fecha.indexOf('T'));
            cont++;
            infoRegistros += `
                    <div class="card m-2 p-4">
                        <h3 class="card-title"><b>Registro #${cont}</b></h3>
                        <h5 class="card-subtitle">
                        <i class="far fa-calendar-alt m-4"></i><b>Fecha:</b> ${fecha}
                        </h5>
                        <h5 class="card-subtitle">
                        <i class="fas fa-info-circle m-4"></i><b>Descripción:</b> ${r.descripcion}
                        </h5>
                    </div>
            `;
        }
    });
    if(infoRegistros == '')
        infoRegistros = '<div class="card m-2 p-4"><h4>Sin registros</h4></div>';
    body.innerHTML += infoMascota + '<div class="card m-5 p-3"><h2><b>Registros</b></h2>' +  infoRegistros + '</div>';
}

(async () => {
    clientes = await get('cliente');
    await loadMascota();
})();
