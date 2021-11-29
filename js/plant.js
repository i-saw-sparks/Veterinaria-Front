let id;
let set = false;
let lastRec = 0;

const form = document.getElementById('form');

const planta = {
    nombre: document.getElementById('nombre'),
    ultima: document.getElementById('ultima'),
    temperatura: document.getElementById('temperatura'),
    luminosidad: document.getElementById('luminosidad'),
    humedad: document.getElementById('humedad'),
    max_temp: document.getElementById('max_temp'),
    min_temp: document.getElementById('min_temp'),
    max_hum: document.getElementById('max_hum'),
    min_hum: document.getElementById('min_hum')
};


(() => {
    const queryString = window.location.search;
    console.log({ queryString });

    if(queryString == ''){
        window.location.assign('dashboard.html');
    }else{
        const urlParams = new URLSearchParams(queryString);
        id = urlParams.get('id');
        loadInfo();
        setInterval(loadInfo, 2000);
    }
})();


form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log('Saving...');

    if(Number(planta.max_temp.value) < Number(planta.min_temp.value)){
        alertar('La temperatura máxima no puede ser menor que la mínima', 'danger');
        return;
    }
    if(Number(planta.max_hum.value) < Number(planta.min_hum.value)){
        alertar('La humedad máxima no puede ser menor que la mínima', 'danger');
        return;
    }

    const xForm = 
    `max_temp=${planta.max_temp.value}\
&min_temp=${planta.min_temp.value}\
&min_hum=${planta.min_hum.value}\
&max_hum=${planta.max_hum.value}`;
    
    console.log(xForm);

    fetch(base_url + '/planta/settings/' + id,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: xForm
    })
    .then(r => r.json())
    .then(resp=>{
        if(resp['acknowledged']){
            alertar('Datos cambiados', 'success');
        }else{
            alertar('No se pudieron guardar los datos', 'danger');
        }
    })
    .catch(error=>{
        console.error(error);
        alertar('No se pudieron guardar los datos', 'danger');
    });
});


function loadInfo(){
    console.log({id});
    const token = 'Bearer ' + localStorage.getItem('token');

    fetch(base_url + '/planta/' + id,
    {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    .then(r => r.json())
    .then(resp => {
        const last = resp['last_rec'];

        planta.nombre.innerHTML = 'Planta #' + resp['id_micro'];

        if(last){
            planta.ultima.innerHTML = new Date(last['recTime']);
            planta.temperatura.innerHTML = last['temperatura'] + '°C';
            planta.humedad.innerHTML = last['humedad'] + '%';
            planta.luminosidad.innerHTML = last['luminosidad'] + ' lx';
        }

        if(!set){
            planta.max_temp.value = resp['max_temp'];
            planta.min_temp.value = resp['min_temp'];
            planta.max_hum.value = resp['max_hum'];
            planta.min_hum.value = resp['min_hum'];
            set = true;
            lastRec = resp['last_rec']['recTime'];
            console.info({ 
                lastRec
             });

            loadHistoric(resp['_id']);
            setLongPolling(resp['last_rec']);
            lastRec = resp['last_rec']['recTime'];
        }else if(lastRec != resp['last_rec']['recTime']){
            appendLongPolling(resp['last_rec']);
            console.info({ 
                lastRec,
                newLastRect: last['recTime']
             });
            lastRec = last['recTime'];

        }

    })
    .catch(error=>{
        console.error(error);
        alertar('Error al recibir información', 'danger');
    });
}