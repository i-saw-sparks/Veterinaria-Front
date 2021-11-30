const body = document.getElementById('body');

(async () => {
    let resp = await get('mascota');
        body.innerHTML = '';
        resp.forEach(m => {
            body.innerHTML += `
            <div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">${ m.nombre }</h5>
                    <h6 class="card-subtitle text-muted">
                        <i class="far fa-calendar-alt m-2"></i> ${ m.fecha_nacimiento }
                        <i class="fas fa-paw m-2"></i> Especie: ${ m.especie }
                    </h6>
                    <a href="cliente.html?id=${ m.id }" class="card-link btn btn-primary mt-3">
                        Editar mascota
                    </a>
                    <a onclick="eliminar(${ m.id })" class="card-link btn btn-danger mt-3">
                        Eliminar mascota
                    </a>
                
                </div>
            </div>
            `;
        });
})();

function eliminar(id){
    console.log(id);
}