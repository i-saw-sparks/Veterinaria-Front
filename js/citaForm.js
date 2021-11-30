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
            id : 'fecha',
            type : 'date',
            placeholder: 'Ingrese la fecha de la cita: AAAA-MM-DD',
            name : 'Fecha'
        },
        {
            id : 'hora_inicio',
            type : 'time',
            placeholder : 'Ingrese la hora de inicio de la cita: HH:MM:SS',
            name : 'Hora de inicio'
        },
        {
            id : 'hora_fin',
            type : 'time',
            placeholder : 'Ingrese la hora de fin de la cita: HH:MM:SS',
            name : 'Hora de fin'
        },
        {
            id : 'tipo',
            type : 'text',
            placeholder: 'Ingrese el tipo de cita',
            name : 'Tipo de cita'
        },
        {
            id : 'id_usuario',
            type : 'select',
            placeholder : 'Ingrese el usuario que atenderá esta cita',
            name : 'Usuario encargado',
            options : usuarios
        },
        {
            id : 'id_mascota',
            type : 'select',
            placeholder : 'Ingrese la mascota será atendida',
            name : 'Mascota atendida',
            options : mascotas
        }
    ];

    productoController = new FormBuilder(test, 'form_content_', 'form', 'cita');
    
})();