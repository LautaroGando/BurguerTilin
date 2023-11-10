const currentLogin = JSON.parse(localStorage.getItem('login'));

if (currentLogin) {

    window.location.href = '/index.html';

};