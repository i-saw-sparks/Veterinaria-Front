const body = document.getElementById('body');

async function loadCliente() {

    const queryString = window.location.search;
    let id = '';

    if (queryString != '') {
        urlParams = new URLSearchParams(queryString);
        id = urlParams.get('id') || '';
    }
    let resp = await get('cliente/' + id);
    let mascotas = await get('mascota');

    console.log(resp);
    body.innerHTML = '';
    let htmlTotal = '';

    htmlTotal += `
        <div class="m-3">
            <div class="card shadow row py-1">
                <h1>${resp.nombre}</h1>
            </div>
            <div class="card shadow row my-3">
                <h6 class="card-subtitle text-muted pt-3">
                    <p>
                        <i class="fas fa-phone-alt mx-2"></i> ${resp.telefono}
                    </p>
                    <p>
                        <i class="fas fa-home mx-2"></i> ${resp.direccion}
                    </p>
                    <p>
                        <i class="far fa-envelope mx-2"></i> ${resp.email}
                    </p>                                        
                </h6>           
            </div>
            <div class="card shadow col col-md-5 pt-1">     
            <h3 class="mt-2 mx-2 text-center">Mascotas de este cliente</h3> 
            <hr class="mt-0 mx-4">          
            `;
    mascotas.forEach(mascota => {
        if(mascota.id_cliente == id)
        htmlTotal += `
        <div class="text-muted row mx-4">
            <div class="col col-lg-8">
                <p>Nombre: ${mascota.nombre}</p>
                <p>Fecha de nacimiento: ${mascota.fecha_nacimiento.substring(0, mascota.fecha_nacimiento.indexOf('T'))}</p>
                <p>Especie: ${mascota.especie}</p>
            </div>
            <div class="col col-lg-4">
                <a href="mascota-detalles.html?id=${mascota.id}" class="card-link btn btn-secondary mt-3">
                    Ver detalles
                </a>
            </div>
        </div>
        <hr class="mx-4">
        `
    });
    htmlTotal += `
            </div>
        </div>
        `;
    body.innerHTML += htmlTotal;
};

(async () => {
    await loadCliente();
})();

