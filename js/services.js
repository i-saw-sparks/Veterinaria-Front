const baseUrl = 'http://142.93.117.12/apiOs/';

function getToken(){
    const token = 'Bearer ' + localStorage.getItem('token');
    return {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    };
}