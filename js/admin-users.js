const usersStart = [
    {
        id: crypto.randomUUID(),
        name: 'admin',
        email: 'admin@admin.com',
        confirmEmail: 'admin@admin.com',
        pass: 'admin',
        confirmPass: 'admin',
        role: 'ADMIN',
        createDate: new Date('2023-11-02' + 'T00:00:00-03:00').getTime()
    },
    {
        id: crypto.randomUUID(),
        name: 'Ganditooo',
        email: 'lauticapo1910cavs@gmail.com',
        confirmEmail: 'lauticapo1910cavs@gmail.com',
        pass: 'Ganditocapo3',
        confirmPass: 'Ganditocapo3',
        role: 'USER',
        createDate: new Date('2023-11-02' + 'T00:00:00-03:00').getTime()
    }
];

const formHTML = document.getElementById("form");
const tableHTML = document.getElementById("table");
const searchHTML = document.getElementById("search");
const formButtonHTML = formHTML.querySelector("button[type='submit']");
const userCountHTML = document.getElementById("user-count");
const userAddHTML = document.getElementById("user-add");
const outFormHTML = document.querySelector('.out-form');

if (localStorage.getItem('user') === null) {

    localStorage.setItem('user', JSON.stringify(usersStart));

};

const users = JSON.parse(localStorage.getItem('user'));

outFormHTML.addEventListener('click', () => {

    formHTML.style.opacity = 0;
    formHTML.style.zIndex = -1;

    outFormHTML.style.opacity = 0;
    outFormHTML.style.zIndex = -1;

});

userAddHTML.addEventListener('click', () => {

    formHTML.style.opacity = 1;
    formHTML.style.zIndex = 10;

    outFormHTML.style.zIndex = 10;
    outFormHTML.style.opacity = 1;

    document.querySelector('h2').innerHTML = 'AGREGAR USUARIO';

    resetForm();

});

searchHTML.addEventListener('keyup', (e) => {

    const element = e.target.value.toLowerCase();

    const filterUserArray = users.filter(user => {

        const name = user.name.toLowerCase();

        if (name.includes(element)) {

            return true;

        };

        return;

    });

    paintUser(filterUserArray);

});

formHTML.addEventListener('submit', (e) => {

    e.preventDefault();

    const element = e.target.elements;

    const id = element.id.value ? element.id.value : crypto.randomUUID();

    const newUser = {
        id: id,
        name: element.name.value,
        email: element.email.value,
        confirmEmail: element.confirmEmail.value,
        pass: element.pass.value,
        confirmPass: element.confirmPass.value,
        role: element.role.value,
        createDate: new Date(element.createDate.value + 'T00:00:00-03:00').getTime()
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

    const searchUser = users.find(user => {

        if (user.name === element.name.value) {

            return true;

        };
        
        return;

    });

    if (searchUser && searchUser.id !== element.id.value) {

        Swal.fire({
            icon: 'error',
            title: 'El usuario ya fue registrado',
            background: '#3d3b3b',
            color: '#edb026'
        });

        return;

    };

    const searchEmail = users.find(user => {

        if (user.email === element.email.value) {

            return true;

        };
        
        return;

    });

    if (searchEmail && searchEmail.id !== element.id.value) {

        Swal.fire({
            icon: 'error',
            title: 'El correo ya fue registrado',
            background: '#3d3b3b',
            color: '#edb026'
        });

        return;

    };

    console.log(element.role.value)

    if (element.role.value !== 'ADMIN' && element.role.value !== 'USER') {

        Swal.fire({
            icon: 'error',
            title: 'El rol debe ser USER o ADMIN',
            background: '#3d3b3b',
            color: '#edb026'
        });

        return;

    };

    if (element.id.value) {

        const index = users.findIndex(user => {
            
            if (user.id === element.id.value) {

                return true;

            };

            return;

        });

        Swal.fire({
            icon: 'success',
            title: 'Usuario editado correctamente!',
            color: '#edb026',
            background: '#3d3b3b',
            showConfirmButton: false,
            timer: 1500
        });

        users[index] = newUser;

    } else {

        Swal.fire({
            icon: 'success',
            title: 'Usuario agregado correctamente!',
            color: '#edb026',
            background: '#3d3b3b',
            showConfirmButton: false,
            timer: 1500
        });

        users.push(newUser);

    };

    userCount();

    paintUser(users);

    updateStorage();

    formHTML.style.opacity = 0;
    formHTML.style.zIndex = -1;

    outFormHTML.style.opacity = 0;
    outFormHTML.style.zIndex = -1;

});

function userCount() {

    let counterUser = 0;

    for (let i = 0; i < users.length; i++) {
        
        counterUser++;
        
    };

    userCountHTML.innerHTML = `Hay un total de ${counterUser} usuarios`;

};

userCount();

function paintUser(array) {

    tableHTML.innerHTML = '';

    array.forEach(user => {
        
        tableHTML.innerHTML += `<tr>
                                    <td>${user.name}</td>
                                    <td>${user.email}</td>
                                    <td>${user.role}</td>
                                    <td>${formatDate(user.createDate)}</td>
                                    <td>
                                        <button onclick="editUser('${user.id}')">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button onclick="deleteUser('${user.id}', '${user.name}')">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>`;

    });

};

paintUser(users);

function formatDate(date) {
  
    const objectIntl = new Intl.DateTimeFormat('es-AR', {

        day: '2-digit',
        month: '2-digit',
        year: 'numeric'

    });

    const formatIntl = objectIntl.format(date);

    return formatIntl;

};

function formatInputDate(date) {

    const objectDate = new Date(date);

    const year = objectDate.getFullYear();

    let month = objectDate.getMonth() + 1;

    if (month < 10) {

        month = `0${month}`;

    };

    const day = objectDate.getDate().toString().padStart(2, '0');

    date = `${year}-${month}-${day}`;

    return date;

}; 

function deleteUser(id, name) {

    const deleteUserArray = users.findIndex(user => user.id === id);

    Swal.fire({

        title: `Desea eliminar el usuario: ${name}?`,
        text: "Los cambios no seran reversibles!",
        icon: 'warning',
        color: '#edb026',
        background: '#3d3b3b',
        showCancelButton: true,
        confirmButtonColor: '#edb026',
        cancelButtonColor: '#232323',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'

    }).then((result) => {

        if (result.isConfirmed) {

            Swal.fire(

                {
                    title: `Eliminado!`,
                    text: `El usuario: ${name} ha sido eliminado correctamente!`,
                    icon: 'success',
                    color: '#edb026',
                    background: '#3d3b3b',
                }

            );

            users.splice(deleteUserArray, 1);

            paintUser(users);

            userCount();

            updateStorage();

        };

    });

};

function editUser(id) {

    const editUserArray = users.find(user => user.id === id);

    const element = formHTML.elements;

    element.id.value = editUserArray.id;
    element.name.value = editUserArray.name;
    element.email.value = editUserArray.email;
    element.confirmEmail.value = editUserArray.confirmEmail;
    element.role.value = editUserArray.role;
    element.pass.value = editUserArray.pass;
    element.confirmPass.value = editUserArray.confirmPass;
    element.createDate.value = formatInputDate(editUserArray.createDate);

    element.pass.disabled = true;
    element.confirmPass.disabled = true;

    formHTML.classList.add('edit');
    formButtonHTML.innerHTML = 'EDITAR';

    formHTML.style.opacity = 1;
    formHTML.style.zIndex = 10;

    outFormHTML.style.opacity = 1;
    outFormHTML.style.zIndex = 10;

    document.querySelector('h2').innerHTML = 'EDITAR USUARIO';

};

function resetForm() {

    formHTML.reset();

    formHTML.elements.id.value = '';

    formButtonHTML.innerHTML = 'AGREGAR';

    formHTML.elements.name.focus();

    formHTML.elements.pass.disabled = false;
    formHTML.elements.confirmPass.disabled = false;

};

function updateStorage() {

    localStorage.setItem('user', JSON.stringify(users));

};