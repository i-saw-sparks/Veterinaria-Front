const permisoSidebar = document.getElementById('permisos');

const permisos  = [
    {
        nombre: 'Calendario',
        ruta: 'calendario.html'
    },
    {
        nombre: 'Citas',
        ruta: 'citas.html'
    },
    {
        nombre: 'Clientes',
        ruta: 'clientes.html'
    },
    {
        nombre: 'Mascotas',
        ruta: 'mascotas.html'
    },
    {
        nombre: 'Productos',
        ruta: 'productos.html'
    },
    {
        nombre: 'Insumos',
        ruta: 'insumos.html'
    },
    {
        nombre: 'Proveedores',
        ruta: 'proveedores.html'
    },
    {
        nombre: 'Usuarios',
        ruta: 'usuarios.html'
    }
];


(()=> {
    permisoSidebar.innerHTML = '';

    permisos.forEach(p => {
        const keyword = p.nombre.toLowerCase().substring(0, p.nombre.length - 1);
        let $class = '';
        if(window.location.href.includes(keyword)){
            $class = 'active';
            console.log({
                $class,
                location: window.location.href
            });
        }
        permisoSidebar.innerHTML += 
        `
        <a href="${ p.ruta }" class="mt-2 position-relative">
            <div class="  position-absolute rounded"></div>
            <small class="f-18 c-blanco ${$class}"> ${p.nombre } </small>
        </a>
        `
    });

})();