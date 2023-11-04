window.addEventListener("scroll", function() {

    let header = document.querySelector(".nav-menu");

    header.classList.toggle("abajo", window.scrollY > 0);

});

const cardContainerHTML = document.querySelector(".card-container");
const searchBurguerHTML = document.getElementById("search");
const burguerCountHTML = document.getElementById("burguer-count");

const burguers = JSON.parse(localStorage.getItem("product"));

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

if (burguers) {

    paintBurguer(burguers);

} else {

    window.location.href = "/pages/admin/admin-products.html";
    
};

function formatDate(date) {

    const objectIntl = new Intl.DateTimeFormat('es-AR', {

        day: '2-digit',
        month: '2-digit',
        year: 'numeric'

    });

    const formatIntl = objectIntl.format(date);

    return formatIntl;

};