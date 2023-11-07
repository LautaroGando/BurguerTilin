let users = JSON.parse(localStorage.getItem("user")) || [];

const buttonRegisterHTML = document.querySelector(".button-register");
const formRegisterHTML = document.getElementById("form-register");

formRegisterHTML.addEventListener("submit", (e) => {

    e.preventDefault();

    const element = e.target.elements;

    for (const i of users) {
        
        if (element.user.value === i.user) {

            Swal.fire({
                icon: 'error',
                title: 'El usuario ya existe',
                background: '#3d3b3b',
                color: '#edb026'
            });

            return;

        };

        if (element.email.value === i.email) {

            Swal.fire({
                icon: 'error',
                title: 'El correo ya existe',
                background: '#3d3b3b',
                color: '#edb026'
            });

            return;

        };

        if (element.email.value !== element.confirmEmail.value) {

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
        user: element.user.value,
        email: element.email.value,
        confirmEmail: element.confirmEmail.value,
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

//! HACER EL LOGIN DE NUEVO PARA APRENDERLO