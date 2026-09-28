// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}


// ===============================
// ADD TO CART
// ===============================

const cartButtons = document.querySelectorAll(".add-cart");

let cartCount = 0;

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productName = button.getAttribute("data-product") || "This item";

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

if (searchBtn) {
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
}


// ===============================
// CART BUTTON
// ===============================

const cartBtn = document.getElementById("cartBtn");

if (cartBtn) {
    cartBtn.addEventListener("click", () => {

        if (cartCount === 0) {

            alert("Your cart is currently empty.");

        } else {

            alert(
                `You have ${cartCount} item(s) in your cart.`
            );

        }

    });
}


// ===============================
// PRODUCT FILTERS
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const sortProducts = document.getElementById("sortProducts");

if (filterButtons.length && productCards.length && productGrid) {
    const updateProducts = (filter = "all", sort = "featured") => {
        const visibleCards = [...productCards].filter(card => {
            const category = card.dataset.category || "all";
            return filter === "all" || category === filter;
        });

        const sortedCards = [...visibleCards].sort((a, b) => {
            const priceA = Number(a.dataset.price || 0);
            const priceB = Number(b.dataset.price || 0);

            if (sort === "low-to-high") return priceA - priceB;
            if (sort === "high-to-low") return priceB - priceA;
            return 0;
        });

        productGrid.innerHTML = "";
        sortedCards.forEach(card => productGrid.appendChild(card));

        if (productCount) {
            productCount.textContent = `${sortedCards.length} Product${sortedCards.length === 1 ? "" : "s"}`;
        }
    };

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedFilter = button.dataset.filter || "all";
            const activeSort = sortProducts ? sortProducts.value : "featured";

            filterButtons.forEach(item => item.classList.toggle("active", item === button));
            updateProducts(selectedFilter, activeSort);
        });
    });

    if (sortProducts) {
        sortProducts.addEventListener("change", () => {
            const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
            updateProducts(activeFilter, sortProducts.value);
        });
    }

    updateProducts();
}

