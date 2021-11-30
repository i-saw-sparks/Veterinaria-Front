const baseUrl = 'http://142.93.117.12/apiOs/';

function getToken(method = 'GET'){
    const token = 'Bearer ' + localStorage.getItem('token');
    return {
        method: method,
        headers: {
            'Authorization': token
        }
    };
}

let get = async(propiedad) => {
    try{
        let resp = await fetch(baseUrl + propiedad, getToken());
        resp = await resp.json();
        return resp;

    }catch(e){
        console.error(e);
        return [];
    }
}

let deleteRecord = async(propiedad, id) => {
    try{
        let resp = await fetch(baseUrl + propiedad + '/' + id, getToken('DELETE'));
        resp = await resp.json();
        console.log(resp);
        return true;
    }catch(e){
        console.error(e);
        return false;
    }
}