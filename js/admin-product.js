const formHTML = document.getElementById("form");
const tableHTML = document.getElementById("table");
const searchHTML = document.getElementById("search");
const formButtonHTML = formHTML.querySelector("button[type='submit']");
const productCountHTML = document.getElementById("product-count");
const productAddHTML = document.getElementById("product-add");
const outFormHTML = document.querySelector('.out-form');
const crossFormHTML = formHTML.querySelector('i');

const products = JSON.parse(localStorage.getItem('product'));

crossFormHTML.addEventListener('click', () => {

    resetForm();

    formHTML.style.opacity = 0;
    outFormHTML.style.opacity = 0;

    formHTML.style.zIndex = -1;
    outFormHTML.style.zIndex = -1;

});

productAddHTML.addEventListener("click", () => {

    formHTML.style.opacity = 1;
    outFormHTML.style.opacity = 1;

    formHTML.style.zIndex = 10;
    outFormHTML.style.zIndex = 10;

    document.querySelector('h2').innerHTML = 'AGREGAR PRODUCTO';

    resetForm();

});

outFormHTML.addEventListener('click', () => {

    resetForm();

    formHTML.style.opacity = 0;
    outFormHTML.style.opacity = 0;

    formHTML.style.zIndex = -1;
    outFormHTML.style.zIndex = -1;

});

searchHTML.addEventListener('keyup', (e) => {

    const element = e.target.value.toLowerCase();

    const filterProductArray = products.filter(product => {

        const name = product.name.toLowerCase();

        if (name.includes(element)) {

            return true;

        };

        return;

    });

    paintProduct(filterProductArray);

});

formHTML.addEventListener('submit', (e) => {

    e.preventDefault();

    const element = e.target.elements;

    const id = element.id.value ? element.id.value : crypto.randomUUID();

    const newProduct = {
        id: id,
        img: element.img.value,
        name: element.name.value,
        description: element.description.value,
        price: element.price.value,
        date: new Date(element.date.value + 'T00:00:00-03:00').getTime(),
        favorite: false
    };

    if (element.id.value) {

        const index = products.findIndex(product => {

            if (product.id === element.id.value) {

                return true;

            };

            return;

        });

        Swal.fire({
            icon: 'success',
            title: 'Producto editado correctamente!',
            color: '#edb026',
            background: '#3d3b3b',
            showConfirmButton: false,
            timer: 1500
        });

        products[index] = newProduct;

    } else {

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado correctamente!',
            color: '#edb026',
            background: '#3d3b3b',
            showConfirmButton: false,
            timer: 1500
        });

        products.push(newProduct);

    };

    paintProduct(products);

    countProducts();

    updateStorage();
    
    formHTML.style.opacity = 0;
    outFormHTML.style.opacity = 0;

    formHTML.style.zIndex = -1;
    outFormHTML.style.zIndex = -1;

});

function countProducts() {
    let counterProduct = 0;

    for (let i = 0; i < products.length; i++) {
    
        counterProduct++
    
    };
    
    productCountHTML.innerHTML = `Hay un total de ${counterProduct} productos.`;
}

countProducts();

function paintProduct(array) {

    tableHTML.innerHTML = '';

    array.forEach(product => {

        tableHTML.innerHTML += `<tr>
                                    <td>
                                        <img src="${product.img}" alt="">
                                    </td>
                                    <td>${product.name}</td>
                                    <td>${product.description}</td>
                                    <td>$${product.price}</td>
                                    <td>${formatDate(product.date)}</td>
                                    <td>
                                        <button onclick="editProduct('${product.id}')">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button onclick="deleteProduct('${product.id}', '${product.name}')">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>`;

    });

};

paintProduct(products);

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

    const day = objectDate.getDate();

    date = `${year}-${month}-${day}`;

    return date;

};

function deleteProduct(id, name) {

    const deleteProductArray = products.findIndex(product => product.id === id);

    Swal.fire({

        title: `Desea eliminar el producto: ${name}?`,
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
                    text: `El producto: ${name} ha sido eliminado correctamente!`,
                    icon: 'success',
                    color: '#edb026',
                    background: '#3d3b3b',
                }

            );

            products.splice(deleteProductArray, 1);

            paintProduct(products);

            updateStorage();

            countProducts();

        };

    });

};

function editProduct(id) {

    const element = formHTML.elements;

    const editProductArray = products.find(product => product.id === id);

    element.id.value = editProductArray.id;
    element.img.value = editProductArray.img;
    element.name.value = editProductArray.name;
    element.description.value = editProductArray.description;
    element.price.value = editProductArray.price;
    element.date.value = formatInputDate(editProductArray.date);

    formButtonHTML.innerHTML = 'EDITAR';

    formHTML.style.opacity = 1;
    outFormHTML.style.opacity = 1;

    formHTML.style.zIndex = 10;
    outFormHTML.style.zIndex = 10;

    document.querySelector('h2').innerHTML = 'EDITAR PRODUCTO';

};

function resetForm() {

    formHTML.reset();

    formHTML.elements.id.value = '';

    formHTML.elements.img.focus();

    formButtonHTML.innerHTML = 'AGREGAR';

};

function updateStorage() {

    localStorage.setItem('product', JSON.stringify(products));

};