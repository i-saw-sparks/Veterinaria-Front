let productoController;

(async()=>{
    let clientes = await get('cliente');

    /**
     * Nombre:
     * ID
     */

    clientes = clientes.map(p => ({nombre: p.nombre, id: p.id}));

    const test = [
        {
            id : 'nombre',
            type : 'text',
            placeholder: 'Ingrese el nombre de la mascota',
            name : 'Nombre'
        },
        {
            id : 'fecha_nacimiento',
            type : 'date',
            placeholder : '',
            name : 'Fecha de nacimiento'
        },
        {
            id : 'especie',
            type : 'text',
            placeholder : 'Ingrese la especie de la mascota',
            name : 'Especie'
        },        
        {
            id : 'id_cliente',
            type : 'select',
            options: clientes,
            placeholder : 'Ingrese el cliente dueño de la mascota',
            name: 'Dueño'
        }
    ];

    mascotaController = new FormBuilder(test, 'form_content_', 'form', 'mascota');
    await mascotaController.load();
})();