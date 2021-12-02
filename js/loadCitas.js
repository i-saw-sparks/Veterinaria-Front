const container = document.getElementById('citas-container');



(async () => {

    let citas = await getRecord("cita/usuario", localStorage.getItem("id"));


    container.innerHTML = '';
   

    function sameDay(d1, d2) {
        // let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        // let date = (new Date(d1 + tzoffset));

        d1 = new Date(d1)

        d1.setMinutes(d1.getMinutes() + d1.getTimezoneOffset())
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }


    citas.forEach(r => {
        if (sameDay(new Date(r['fecha']), new Date(Date.now()))) {
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
                </div>
            </div>`

            container.innerHTML += body;
        }
    });

    if (container.innerHTML == '') {
        container.innerHTML = `
            <div class="my-5">
                <h1>
                    No tienes ninguna cita para hoy 🐶                    
                </h1>
            </div>`;
    }
})();