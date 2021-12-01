let productoController;

(async () => {

    let test = [
        {
            id: 'nombre',
            type: 'text',
            placeholder: 'Ingrese el nombre del usuario',
            name: 'Nombre del usuario'
        },
        {
            id: 'horario',
            type: 'number',
            placeholder: 'Ingrese el horario del usuario. Ej. (L,M,-,-,-,S,D): 1100011 ',
            name: 'Horario del usuario'
        },
        {
            id: 'tipo_usuario',
            type: 'number',
            placeholder: 'Ingrese el tipo de usuario (1:Administrador, 2:Privilegiado, 3:Normal)',
            name: 'Tipo de usuario'
        },
        {
            id: 'permisos',
            type: 'text',
            placeholder: 'Ingrese los permisos del usuario',
            name: 'Permisos del usuario'
        }
    ];

    if (getId() === '') {
        test.splice(1, 0, {
            id: 'contrasenia',
            type: 'password',
            placeholder: 'Ingrese la contraseña del usuario',
            name: 'Contraseña del usuario'
        });
    }

    productoController = new FormBuilder(test, 'form_content_', 'form', 'usuario');
    await productoController.load();
})();


function getId() {
    const queryString = window.location.search;

    if (queryString == '') {
        return '';
    } else {

        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('id') || '';
    }
}