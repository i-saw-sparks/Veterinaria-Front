const base_url = 'http://142.93.117.12/apiOs';

(() => {
    const logged = localStorage.getItem('logged') || 'false';

    console.log({ logged });

    // showModal('hola', 'hola');
    // alertar('ok','success');

    if (logged == 'false' && !window.location.href.includes('login') && !window.location.href.includes('register')) {
        console.log('Return to login');
        window.location.assign('login.html');
    }
})();

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('logged');
    localStorage.removeItem('userid');
    localStorage.removeItem('tipo');
    window.location.assign('login.html');
}