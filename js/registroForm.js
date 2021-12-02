let productoController;

(async()=>{
    let mascotas = await get('mascota');

    mascotas = mascotas.map(p => ({nombre: p.nombre, id: p.id}));

    const queryString = window.location.search;
    let id = '';

    if (queryString != '') {
        urlParams = new URLSearchParams(queryString);
        id = urlParams.get('id_mascota') || '';
    }

    console.log(mascotas);
    const test = [
        {
            id : 'descripcion',
            type : 'text',
            placeholder: 'Ingrese la descripcion del registro',
            name : 'Descripcion'
        },
        {
            id : 'fecha',
            type : 'date',
            name : 'Fecha de registro',
        },
        {
            id : 'id_mascota',
            type : 'hidden',
            placeholder : 'Ingrese la mascota a la que le pertenece este registro',
            name : '',
            value:id,
            options : mascotas
        }
    ];

    mascotaController = new FormBuilder(test, 'form_content_', 'form', 'registro');
    await mascotaController.load();
})();