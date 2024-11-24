const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = document.querySelector(".navbar .close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const signupLoginLinks = document.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
});

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.add("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Toggle between login and signup forms
signupLoginLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (link.id === 'signup-link') {
            formPopup.classList.add("show-signup");
        } else {
            formPopup.classList.remove("show-signup");
        }
    });
});

// Search bar functionality
document.querySelector('.search-bar').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = e.target.query.value.trim();
    if (query) {
        console.log(`Search for: ${query}`);
        window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert("Search field cannot be empty!");
    }
});
