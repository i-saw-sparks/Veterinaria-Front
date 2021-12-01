const container = document.getElementById('citas-container');



(async () => {

    let citas = await getRecord("cita/usuario", localStorage.getItem("id"));


    container.innerHTML = '';
    if (citas.length == 0) {
        container.innerHTML = `
            <div class="my-5">
                <h1>
                    No tienes ninguna cita pendiente 🐶                    
                </h1>
            </div>`;
    }


    citas.forEach(r => {
        const body = `
            <div class="card shadow my-2">
                <div class="card-body">
                    <h5 id="nombre" class="card-title text-left font-weight-bold ">
                        Cita #${r['id']}
                    </h5>
                    <div class="text-left my-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item font-size-12">Fecha ${r['fecha'].substring(0, r['fecha'].indexOf('T'))}</li>
                            <li class="list-group-item m">Inicio: ${r['hora_inicio']}</li>
                            <li class="list-group-item">Fin: ${r['hora_fin']}</li>
                            <li class="list-group-item">Tipo: ${r['tipo']}</li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <a href="plant.html?id=${r['id']}" class="btn btn-outline-primary px-4">
                            Más detalles
                        </a>
                    </div>
                </div>
            </div>`

        container.innerHTML += body;
    });
})();