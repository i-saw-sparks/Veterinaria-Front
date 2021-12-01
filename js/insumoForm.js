let productoController;

(async()=>{
    let proveedores = await get('proveedor');

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
            placeholder : 'Ingrese el precio de compra del producto',
            name : 'Precio de compra'
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

    insumoController = new FormBuilder(test, 'form_content_', 'form', 'insumo');
    await insumoController.load();
})();