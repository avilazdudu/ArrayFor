let cart = document.getElementById("cart")
let btnOpen = document.getElementById("open")
let btnClose = document.getElementById("close") 

function openCart(){ // Show the cart
    cart.style.visibility = "visible";
    cart.style.animation = "slideIn 1s forwards"
    btnOpen.style.animation = "slideInBtn 1s forwards"
}
function closeCart(){ // Hide the cart
    cart.style.animation = "slideOut 1s forwards";
    btnOpen.style.animation = "slideOutBtn 1s forwards"
    setTimeout(() => {
        cart.style.visibility = "hidden";
    }, 1000);
}


btnOpen.addEventListener("click", openCart) // Open the cart when the button is clicked
btnClose.addEventListener("click", closeCart) // Close the cart when the button is clicked