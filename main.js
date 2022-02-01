let btnToggleMobileMenu = document.querySelector("#btn-toggle-mobile-menu");
let navbar = document.querySelector(".nav__content");

function handleMobileMenu(event) {
  navbar.classList.toggle("open-menu");
}

function init() {
  btnToggleMobileMenu.addEventListener("click", handleMobileMenu);
}

init();
