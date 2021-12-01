const loginForm = document.getElementById('login');

const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password')
};

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        nombre: form.username.value,
        contrasenia: form.password.value
    }

    const body = JSON.stringify(data);

    console.log({body});

    fetch(base_url + '/auth',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    })
    .then(r => r.json())
    .then(resp => {
        console.log(resp);
        if(resp['token']){
            localStorage.setItem('token', resp['token']);
            localStorage.setItem('id', resp['userid']);
            localStorage.setItem('tipo', resp['tipo_usuario'])
            localStorage.setItem('logged', 'true');

            window.location.assign('calendario.html');
        }else{
            alertar('No se pudo iniciar sesión', 'danger');
        }
    })
    .catch(error => {
        console.log(error);
        alertar('No se pudo iniciar sesión', 'danger');
    });
});

