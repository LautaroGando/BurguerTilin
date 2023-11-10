let users = JSON.parse(localStorage.getItem("user")) || [];

const buttonRegisterHTML = document.querySelector(".button-register");
const formRegisterHTML = document.getElementById("form-register");

formRegisterHTML.addEventListener("submit", (e) => {

    e.preventDefault();

    const element = e.target.elements;

    for (const i of users) {
        
        if (element.user.value.toLowerCase() === i.user.toLowerCase()) {

            Swal.fire({
                icon: 'error',
                title: 'El usuario ya existe',
                background: '#3d3b3b',
                color: '#edb026'
            });

            return;

        };

        if (element.email.value.toLowerCase() === i.email.toLowerCase()) {

            Swal.fire({
                icon: 'error',
                title: 'El correo ya existe',
                background: '#3d3b3b',
                color: '#edb026'
            });

            return;

        };

        if (element.email.value.toLowerCase() !== element.confirmEmail.value.toLowerCase()) {

            Swal.fire({
                icon: 'error',
                title: 'Los correos deben coincidir',
                background: '#3d3b3b',
                color: '#edb026'
            });

            return;

        };

        if (element.pass.value !== element.confirmPass.value) {

            Swal.fire({
                icon: 'error',
                title: 'Las claves deben coincidir',
                background: '#3d3b3b',
                color: '#edb026'
            });

            return;

        };

    };

    const id = element.id.value ? element.id.value : crypto.randomUUID();

    const newUser = {
        id: id,
        fullname: element.fullname.value,
        user: element.user.value.toLowerCase(),
        email: element.email.value.toLowerCase(),
        confirmEmail: element.confirmEmail.value.toLowerCase(),
        pass: element.pass.value,
        confirmPass: element.confirmPass.value,
        role: "USER",
        date: new Date(element.date.value + 'T00:00:00-03:00').getTime(),
        createDate: new Date().getTime(),
        location: element.location.value
    };

    Swal.fire({
        icon: 'success',
        title: 'Usuario registrado correctamente!',
        color: '#edb026',
        background: '#3d3b3b',
        showConfirmButton: false,
        timer: 1500
    });

    users.push(newUser);

    localStorage.setItem("user", JSON.stringify(users));

});

users = JSON.parse(localStorage.getItem("user"));

const buttonLoginHTML = document.querySelector(".button-login");
const formLoginHTML = document.getElementById('form-login');

formLoginHTML.addEventListener('submit', (e) => {

    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('user')) || [];

    const user = e.target.elements.userLogin.value.toLowerCase();
    const pass = e.target.elements.passLogin.value;

    const findUser = users.find(usr => usr.user.toLowerCase() === user.toLowerCase() && usr.pass === pass);

    if (!findUser) {

        Swal.fire({
            icon: 'error',
            title: 'Usuario y/o clave es incorrecto!',
            color: '#edb026',
            background: '#3d3b3b',
            showConfirmButton: false,
            timer: 1500
        });

        return;

    };

    Swal.fire({
        icon: 'success',
        title: `Bienvenido ${user}!`,
        text: 'Seras redireccionado al inicio en unos instantes.',
        color: '#edb026',
        background: '#3d3b3b',
        showConfirmButton: false,
        timer: 1500
    });

    localStorage.setItem('login', JSON.stringify(findUser));

    setTimeout(() => {

        window.location.href = '/index.html';
        
    }, 2000);

});