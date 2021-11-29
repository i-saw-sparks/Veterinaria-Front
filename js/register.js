const registerForm = document.getElementById('register');

const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    email: document.getElementById('email'),
    nombre: document.getElementById('nombre')
};

registerForm.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        username: form.username.value,
        password: form.password.value,
        email: form.email.value,
        nombre: form.nombre.value
    };

    console.log(data);
    const body = JSON.stringify(data);

    fetch(base_url + '/usuario',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        })
        .then(r => r.json())
        .then(resp => {
            console.log(resp);
            if (resp['acknowledged']) {
                alertar('Usuario registrado', 'success');
            } else {
                alertar('No se pudo registrar al usuario', 'danger');
            }
        })
        .catch(error => {
            console.log(error);
            alertar('No se pudo registrar al usuario', 'danger');
        });
});

