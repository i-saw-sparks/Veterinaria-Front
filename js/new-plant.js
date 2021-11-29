const form = document.getElementById('form');

const planta = {
    id_micro: document.getElementById('id_micro'),
    max_temp: document.getElementById('max_temp'),
    min_temp: document.getElementById('min_temp'),
    max_hum: document.getElementById('max_hum'),
    min_hum: document.getElementById('min_hum')
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Saving...');

    const token = 'Bearer ' + localStorage.getItem('token');

    if(Number(planta.max_temp.value) < Number(planta.min_temp.value)){
        alertar('La temperatura máxima no puede ser menor que la mínima', 'danger');
        return;
    }
    if(Number(planta.max_hum.value) < Number(planta.min_hum.value)){
        alertar('La humedad máxima no puede ser menor que la mínima', 'danger');
        return;
    }

    const obj = {};
    Object.keys(planta).forEach(key => obj[key] = planta[key].value);

    const body = JSON.stringify(obj);

    fetch(base_url + '/planta',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
        })
        .then(r => r.json())
        .then(resp => {
            if (resp['acknowledged']) {
                alertar('Plantita guardada', 'success');
                setTimeout(() => {
                    window.location.assign('dashboard.html');
                }, 2500);
            } else {
                alertar('No pudimos dar de alta la planta', 'danger');
            }
        })
        .catch(error => {
            alertar('No pudimos dar de alta la planta', 'danger');
        });

    console.log(obj);
});