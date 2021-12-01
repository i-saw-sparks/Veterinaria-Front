let productoController;

(async()=>{
    let clientes = await get('cliente');

    clientes = clientes.map(p => ({nombre: p.nombre, id: p.id}));

    const test = [
        {
            id : 'nombre',
            type : 'text',
            placeholder: 'Ingrese el nombre del cliente',
            name : 'Nombre'
        },
        {
            id : 'telefono',
            type : 'text',
            placeholder : 'Ingrese el numero de telefono del cliente',
            name : 'Numero de telefono'
        },
        {
            id : 'direccion',
            type : 'text',
            placeholder : 'Ingrese la direccion del cliente',
            name : 'Direccion'
        },        
        {
            id : 'email',
            type : 'text',
            placeholder : 'Ingrese el email del cliente',
            name: 'Email'
        }
    ];

    clienteController = new FormBuilder(test, 'form_content_', 'form', 'cliente');
    await clienteController.load();
})();