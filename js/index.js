window.addEventListener("scroll", function () {

    let header = document.querySelector(".nav-menu");

    header.classList.toggle("abajo", window.scrollY > 0);

});

const usersStart = [
    {
        id: crypto.randomUUID(),
        fullname: 'Lautaro Gando',
        user: 'admin',
        email: 'admin@admin.com',
        confirmEmail: 'admin@admin.com',
        pass: 'admin',
        confirmPass: 'admin',
        role: 'ADMIN',
        date: new Date('2023-11-02' + 'T00:00:00-03:00').getTime(),
        createDate: new Date('2023-11-02' + 'T00:00:00-03:00').getTime(),
        location: 'Liniers'
    },
    {
        id: crypto.randomUUID(),
        fullname: 'Lautaro Gando',
        user: 'user',
        email: 'user@user.com',
        confirmEmail: 'user@user.com',
        pass: 'user',
        confirmPass: 'user',
        role: 'USER',
        date: new Date('2023-11-02' + 'T00:00:00-03:00').getTime(),
        createDate: new Date('2023-11-02' + 'T00:00:00-03:00').getTime(),
        location: 'Versalles'
    }
];

if (localStorage.getItem('user') === null) {

    localStorage.setItem('user', JSON.stringify(usersStart));

};

const productsStart = [
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Stacker XL Triple",
        description: "Tres carnes a la parrilla, salsa stacker, pan, queso cheddar, panceta",
        price: 5400,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-2.png",
        name: "Melt de carne doble con salsa Spicy",
        description: "Pan de molde tostado, cebolla rehogada, queso cheddar, salsa Spicy (salsa cheddar picante), y 100% carne a la parrilla.",
        price: 4300,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-3.png",
        name: "Cheese onion doble",
        description: "Pan, doble carne a la parrilla, salsa cheddar y cebolla salteada",
        price: 4100,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-4.png",
        name: "Whopper Guacamole",
        description: "Pan, carne a la parrilla, lechuga, tomate, cebolla, pepino, mayonesa y guacamole",
        price: 4000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-5.png",
        name: "Provo King Doble Carne",
        description: "Pan de masa madre con harina de centeno, mayonesa, mix de lechugas, cebolla, alioli de albahaca, tomates secos hidratados en aceite, queso provolone, carne a la parri, queso provolone, carne a la parri.",
        price: 4600,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-6.png",
        name: "Stacker con bastones de muzzarella",
        description: "Deliciosa carne a la parrilla, panceta, queso cheddar, bastones de muzzarella, y salsa stacker",
        price: 5800,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-7.png",
        name: "BBQ Bacon XL Doble",
        description: "Carne a la parri, pan, salsa barbacoa, queso cheddar y panceta. No falla.",
        price: 4600,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
];

if (localStorage.getItem('product') === null) {

    localStorage.setItem('product', JSON.stringify(productsStart));

};

const cardContainerHTML = document.querySelector(".card-container");
const searchBurguerHTML = document.getElementById("search");
const burguerCountHTML = document.getElementById("burguer-count");

const burguers = JSON.parse(localStorage.getItem("product")) || [];

let filterBurguerArray;

searchBurguerHTML.addEventListener("keyup", (e) => {

    const element = e.target.value.toLowerCase();

    filterBurguerArray = burguers.filter(burguer => {

        const name = burguer.name.toLowerCase();

        if (name.includes(element)) {

            return true;

        };

        return;

    });

    paintBurguer(filterBurguerArray);

    burguerCountHTML.innerHTML = `Se han encontrado ${burguerCount()} productos.`;

});

function burguerCount() {

    let counterBurguer = 0;

    for (let i = 0; i < filterBurguerArray.length; i++) {

        counterBurguer++;

    };

    return counterBurguer;

};

function paintBurguer(array) {

    cardContainerHTML.innerHTML = ``;

    array.forEach(burguer => {

        cardContainerHTML.innerHTML += `<article class="card">
                                            <div class="card-product">
                                                <figure>
                                                    <img src="${burguer.img}" alt="">
                                                </figure>
                                            </div>
                                            <div class="card-desc">
                                                <h2>${burguer.name}</h2>
                                                <ul>
                                                    ${burguer.description}
                                                </ul>
                                                <div class="container-price-date">
                                                    <h3>$${burguer.price}</h3>
                                                    <span>${formatDate(burguer.date)}</span>
                                                </div>
                                                <div class="card-buttons">
                                                    <button>VER MAS</button>
                                                    <button>AGREGAR</button>
                                                </div>
                                            </div>
                                        </article>`;

    });

    cardContainerHTML.innerHTML += `<div class="menu"> 
                                        <a href="">
                                            VER MAS
                                            <i class="fa-solid fa-circle-chevron-down"></i>
                                        </a>
                                    </div>`;

};

paintBurguer(burguers);

function formatDate(date) {

    const objectIntl = new Intl.DateTimeFormat('es-AR', {

        day: '2-digit',
        month: '2-digit',
        year: 'numeric'

    });

    const formatIntl = objectIntl.format(date);

    return formatIntl;

};

const verifyLogin = JSON.parse(localStorage.getItem('login'));

const cardDescription = document.querySelectorAll('.card-desc');

if (verifyLogin) {

    cardDescription.forEach((heart, index) => {

        const buttonFavorite = document.createElement('i');
    
        buttonFavorite.classList.add('fa-solid', 'fa-heart', 'card-favorite');
    
        heart.appendChild(buttonFavorite);
    
        const isFavorite = burguers[index].favorite || false;
    
        if (isFavorite) {
    
            buttonFavorite.classList.add('card-favorite-mark');
    
        };
    
        buttonFavorite.onclick = () => {
    
            burguers[index].favorite = !burguers[index].favorite;
    
            buttonFavorite.classList.toggle('card-favorite-mark');
    
            if (burguers[index].favorite) {
    
                Swal.fire({
                    icon: 'success',
                    title: `${burguers[index].name} agregado a favoritos!`,
                    color: '#edb026',
                    background: '#3d3b3b',
                    showConfirmButton: false,
                    timer: 1000
                });
    
            } else {
    
                Swal.fire({
                    icon: 'error',
                    title: `${burguers[index].name} eliminado de favoritos!`,
                    color: '#edb026',
                    background: '#3d3b3b',
                    showConfirmButton: false,
                    timer: 1000
                });
    
            }
    
            localStorage.setItem('product', JSON.stringify(burguers));
    
        };
    
    });

};