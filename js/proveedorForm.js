let productoController;

(async()=>{
    let usuarios = await get('usuario');
    let mascotas = await get('mascota');

    /**
     * Nombre:
     * ID
     */

    usuarios = usuarios.map(p => ({nombre: p.nombre, id: p.id}));
    mascotas = mascotas.map(p => ({nombre: p.nombre, id: p.id}));

    const test = [
        {
            id : 'nombre',
            type : 'text',
            placeholder: 'Ingrese el nombre del proveedor',
            name : 'Nombre del proveedor'
        },
        {
            id : 'direccion',
            type : 'text',
            placeholder : 'Ingrese la dirección del proveedor',
            name : 'Direccion del proveedor'
        },
        {
            id : 'telefono',
            type : 'text',
            placeholder : 'Ingrese el teléfono del proveedor',
            name : 'Telefono del proveedor'
        },
        {
            id : 'correo',
            type : 'text',
            placeholder : 'Ingrese el correo del proveedor',
            name : 'Correo del proveedor',
            options : usuarios
        },
        {
            id : 'descripcion',
            type : 'text',
            placeholder : 'Ingrese una descripción del proveedor',
            name : 'Descripcion del proveedor',
            options : mascotas
        }
    ];

    productoController = new FormBuilder(test, 'form_content_', 'form', 'proveedor');
    
})();