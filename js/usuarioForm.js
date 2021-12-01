let productoController;

(async()=>{
    const test = [
        {
            id : 'nombre',
            type : 'text',
            placeholder: 'Ingrese el nombre del usuario',
            name : 'Nombre del usuario'
        },
        {
            id : 'contrasenia',
            type : 'password',
            placeholder : 'Ingrese la contraseña del usuario',
            name : 'Contrasenia del usuario'
        },
        {
            id : 'horario',
            type : 'text',
            placeholder : 'Ingrese el horario del usuario',
            name : 'Horario del usuario'
        },
        {
            id : 'tipo_usuario',
            type : 'number',
            placeholder : 'Ingrese el tipo de usuario (1:Administrador, 2:Privilegiado, 3:Normal)',
            name : 'Tipo de usuario'
        },
        {
            id : 'permisos',
            type : 'text',
            placeholder : 'Ingrese los permisos del usuario',
            name : 'Permisos del usuario'
        }
    ];

    productoController = new FormBuilder(test, 'form_content_', 'form', 'usuario');
    
})();