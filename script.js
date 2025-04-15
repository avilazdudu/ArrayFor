const products = [
    {
        id: 1,
        name: "Ouro Branco's Easter Egg",
        price: 45.90,
        image: "./img/OuroBranco.png",
        quantity: 1,
    },
    {
        id: 2,
        name: "Sonho de Valsa's Easter Egg",
        price: 39.99,
        image: "./img/SonhoDeValsa.png",
        quantity: 1,
    },
    {
        id: 3,
        name: "Ferrero Collection's Easter Egg",
        price: 54.90,
        image: "./img/FerreroRocher.png",
        quantity: 1
    },
    {
        id: 4,
        name: "Lacta's Easter Egg",
        price: 49.90,
        image: "./img/Lacta.png",
        quantity: 1
    },
    {
        id: 5,
        name: "Nestlé's Easter Egg",
        price: 39.90,
        image: "./img/Nestle.png",
        quantity: 1
    }
]

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productContainer = document.createElement("div");
    productContainer.className = "col-3 text-center m-3 product-box";
    productContainer.style.boxShadow = "10px  10px 20px 5px rgba(0, 0, 0, 0.6)";

    let productRow = document.createElement("div");
    productRow.className = "row"

    let productDivRow = document.createElement("div");
    productDivRow.className= "col-12 d-flex justify-content-center"

    let productImage = document.createElement("img");
    productImage.className = "h-100 w-75 col-12 product-box-img";
    productImage.src = product.image;
    productImage.alt = product.name;

    let productNamePriceDiv = document.createElement("div");
    productNamePriceDiv.className = "row bg-white shadow-lg";
    productNamePriceDiv.style.borderBottomRightRadius = "1rem";
    productNamePriceDiv.style.borderBottomLeftRadius = "1rem";

    let productName = document.createElement("span");
    productName.className = "h6 col-12 d-flex justify-content-start m-3";
    productName.innerText = product.name;

    let productPrice = document.createElement("span");
    productPrice.innerText = `R$ ${product.price.toFixed(2)}`;
    productPrice.className = "col-6 d-flex m-3";
    productPrice.style.fontWeight = "bolder";

    let button = document.createElement("button");
    button.className = "col-3 ml-4 mr-3 mt-2 mb-3 d-flex justify-content-center  btn btn-success btnCompra";
    button.innerText = "Buy"

    productNamePriceDiv.appendChild(productName);
    productNamePriceDiv.appendChild(productPrice);
    productNamePriceDiv.appendChild(button);

    productRow.appendChild(productImage);
    productRow.appendChild(productDivRow);

    productDivRow.appendChild(productNamePriceDiv);


    productContainer.appendChild(productRow);
    

    document.getElementById("productsList").appendChild(productContainer);
}