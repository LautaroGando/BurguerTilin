const navListResponsive = document.getElementById('nav-list-responsive');
const navList = document.getElementById('nav-list');
const navListHeader = document.getElementById('nav-list-header');
const divButtonUser = document.querySelector('.user');

const loginVerify = JSON.parse(localStorage.getItem('login'));

if (loginVerify) {

    const liResponsiveLogin = document.createElement('li');
    const aResponsiveLogin = document.createElement('a');

    liResponsiveLogin.classList.add('nav-list-item-responsive');
    aResponsiveLogin.classList.add('nav-list-link-responsive');
    aResponsiveLogin.innerText = 'SALIR';
    aResponsiveLogin.href = '/index.html';
    aResponsiveLogin.onclick = () => localStorage.removeItem('login');

    navListResponsive.appendChild(liResponsiveLogin);
    liResponsiveLogin.appendChild(aResponsiveLogin);

    const liLogin = document.createElement('li');
    const aLogin = document.createElement('a');

    liLogin.classList.add('nav-list-item');
    aLogin.classList.add('nav-list-link');
    aLogin.innerText = 'SALIR';
    aLogin.href = '/index.html';
    aLogin.onclick = () => localStorage.removeItem('login');

    navListHeader.appendChild(liLogin);
    liLogin.appendChild(aLogin);

    const liName = document.createElement('li');
    const aName = document.createElement('a');

    liName.classList.add('nav-list-item');
    aName.classList.add('nav-list-link-user');
    aName.innerText = loginVerify.user;
    
    navListHeader.appendChild(liName);
    liName.appendChild(aName);

    const liNameResponsive = document.createElement('li');
    const aNameResponsive = document.createElement('a');

    liNameResponsive.classList.add('nav-list-item-responsive');
    aNameResponsive.classList.add('nav-list-link-user');
    aNameResponsive.innerText = loginVerify.user;
    
    navListResponsive.appendChild(liNameResponsive);
    liNameResponsive.appendChild(aNameResponsive);

    divButtonUser.style.display = 'none';

    if (loginVerify.role === 'ADMIN') {

        const liResponsiveProducts = document.createElement('li');
        const aResponsiveProducts = document.createElement('a');

        liResponsiveProducts.classList.add('nav-list-item-responsive');
        aResponsiveProducts.classList.add('nav-list-link-responsive');
        aResponsiveProducts.innerText = 'Administrar Productos';
        aResponsiveProducts.href = '/pages/admin/admin-products.html';

        navListResponsive.appendChild(liResponsiveProducts);
        liResponsiveProducts.appendChild(aResponsiveProducts);

        const liResponsiveUsers = document.createElement('li');
        const aResponsiveUsers = document.createElement('a');

        liResponsiveUsers.classList.add('nav-list-item-responsive');
        aResponsiveUsers.classList.add('nav-list-link-responsive');
        aResponsiveUsers.innerText = 'Administrar Usuarios';
        aResponsiveUsers.href = '/pages/admin/admin-users.html';

        navListResponsive.appendChild(liResponsiveUsers);
        liResponsiveUsers.appendChild(aResponsiveUsers);

        const liProducts = document.createElement('li');
        const aProducts = document.createElement('a');

        liProducts.classList.add('nav-list-item');
        aProducts.classList.add('nav-list-link');
        aProducts.innerText = 'Administrar Productos';
        aProducts.href = '/pages/admin/admin-products.html';

        navList.appendChild(liProducts);
        liProducts.appendChild(aProducts);

        const liUsers = document.createElement('li');
        const aUsers = document.createElement('a');

        liUsers.classList.add('nav-list-item');
        aUsers.classList.add('nav-list-link');
        aUsers.innerText = 'Administrar Usuarios';
        aUsers.href = '/pages/admin/admin-users.html';

        navList.appendChild(liUsers);
        liUsers.appendChild(aUsers);

    };

} else {

    const liResponsiveLogin = document.createElement('li');
    const aResponsiveLogin = document.createElement('a');

    liResponsiveLogin.classList.add('nav-list-item-responsive');
    aResponsiveLogin.classList.add('nav-list-link-responsive');
    aResponsiveLogin.innerText = 'INGRESAR';
    aResponsiveLogin.href = '/pages/register/register.html';

    navListResponsive.appendChild(liResponsiveLogin);
    liResponsiveLogin.appendChild(aResponsiveLogin);

    const liLogin = document.createElement('li');
    const aLogin = document.createElement('a');

    liLogin.classList.add('nav-list-item');
    aLogin.classList.add('nav-list-link');
    aLogin.innerText = 'INGRESAR';
    aLogin.href = '/pages/register/register.html';

    navListHeader.appendChild(liLogin);
    liLogin.appendChild(aLogin);

};