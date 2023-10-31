const products = [
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
    {
        img: "/assets/images/burguers/burguer-1.png",
        name: "Burguer-1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis eligendi eius distinctio rem, veritatis ullam quisquam! Cupiditate, distinctio doloremque esse assumenda inventore, dolorum totam voluptates, molestias in laboriosam sint?",
        price: 53000,
    },
];

const formHTML = document.getElementById("form");
const tableHTML = document.getElementById("table");
const searchHTML = document.getElementById("search");
const formButtonHTML = formHTML.querySelector("button[type='submit']");
const productCountHTML = document.getElementById("product-count");
const productAddHTML = document.getElementById("product-add");

let counterProduct = 0;

for (let i = 0; i < products.length; i++) {
    
    counterProduct++
    
};

productAddHTML.addEventListener("click", () => {

    

});

productCountHTML.innerHTML = `Hay un total de ${counterProduct} productos`;

function paintProduct(array) {

    tableHTML.innerHTML = '';

    array.forEach(product => {
        
        tableHTML.innerHTML += `<tr>
                                    <td>
                                        <img src="${product.img}" alt="">
                                    </td>
                                    <td>${product.name}</td>
                                    <td>${product.description}</td>
                                    <td>${product.price}</td>
                                    <td>
                                        <button onclick="editProduct('${product.id}')">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button onclick="deleteProduct('${product.id}')">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>`;

    });
    
};

paintProduct(products);