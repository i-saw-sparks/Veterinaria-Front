const body = document.getElementById('body');

(()=> {
    fetch(baseUrl + 'cliente',
    getToken())
    .then(r => r.json())
    .then(resp => {
        console.log(resp);
        body.innerHTML = '';
        resp.forEach(c => {
            body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${ c.nombre }</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="fas fa-phone-alt mx-2"></i> ${ c.telefono }
                        <i class="fas fa-home mx-2"></i> ${ c.direccion }
                        <i class="far fa-envelope mx-2"></i> ${ c.email }
                    </h6>
                    <a href="cliente.html?id=${ c.id }" class="card-link btn btn-primary mt-3">
                        Editar detalles
                    </a>
                    <a onclick="eliminar(${ c.id })" class="card-link btn btn-danger mt-3">
                        Eliminar cliente
                    </a>
                
                </div>
            </div>
            `;
        });
    })
    .catch(error => {
        console.error(error)
    })
})();

function eliminar(id){
    console.log(id);
}