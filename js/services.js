const baseUrl = 'http://142.93.117.12/apiOs/';

function getToken(method = 'GET'){
    const token = 'Bearer ' + localStorage.getItem('token');
    return {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    };
}

let get = async(propiedad) => {
    try{
        let resp = await fetch(baseUrl + 'cliente', getToken());
        resp = await resp.json();
        return resp;
        
    }catch(e){
        console.error(e);
        return [];
    }
}