const login = JSON.parse(localStorage.getItem('login'));

if (!login || login.role !== 'ADMIN') {

    window.location.href = '/index.html';

};