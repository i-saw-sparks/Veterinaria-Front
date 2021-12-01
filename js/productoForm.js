let productoController;

(async()=>{
    let proveedores = await get('proveedor');

    /**
     * Nombre:
     * ID
     */

    proveedores = proveedores.map(p => ({nombre: p.nombre, id: p.id}));

    console.log(proveedores);
    const test = [
        {
            id : 'nombre',
            type : 'text',
            placeholder: 'Ingrese el nombre del producto',
            name : 'Nombre'
        },
        {
            id : 'cantidad',
            type : 'number',
            placeholder : 'Ingrese la cantidad de producto existente',
            name : 'Cantidad'
        },
        {
            id : 'precio',
            type : 'number',
            placeholder : 'Ingrese el precio de venta del producto',
            name : 'Precio al público'
        },
        {
            id : 'tipo',
            type : 'text',
            placeholder: 'Ingrese el tipo de producto',
            name : 'Tipo de producto'
        },
        {
            id : 'descripcion',
            type : 'text',
            placeholder : 'Ingrese la descripción detallada del producto',
            name: 'Descripcion'
        },
        {
            id : 'id_proveedor',
            type : 'select',
            placeholder : 'Ingrese el proveedor que lo surte',
            name : 'Proveedor',
            options : proveedores
        }
    ];

    productoController = new FormBuilder(test, 'form_content_', 'form', 'producto');
    await productoController.load();
    
})();