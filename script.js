// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// ===============================
// ADD TO CART
// ===============================

const cartButtons = document.querySelectorAll(".add-cart");

let cartCount = 0;

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productName = button.getAttribute("data-product");

        cartCount++;

        alert(
            `${productName} has been added to your cart!`
        );

        console.log("Cart items:", cartCount);
    });

});


// ===============================
// SEARCH BUTTON
// ===============================

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const search = prompt("What furniture are you looking for?");

    if (search && search.trim() !== "") {

        alert(
            `Searching for "${search}"...`
        );

        // Later you can redirect to:
        // products.html?search=...
    }

});


// ===============================
// CART BUTTON
// ===============================

const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", () => {

    if (cartCount === 0) {

        alert("Your cart is currently empty.");

    } else {

        alert(
            `You have ${cartCount} item(s) in your cart.`
        );

    }

});

