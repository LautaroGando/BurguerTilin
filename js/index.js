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
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-7",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
        date: new Date('2023-10-31' + 'T00:00:00-03:00').getTime(),
        favorite: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-9",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
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