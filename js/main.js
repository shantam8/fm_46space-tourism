let btnToggleMobileMenu = document.querySelector("#btn-toggle-mobile-menu");
let navbar = document.querySelector(".nav__content");

let btnsDestinationSelect = document.querySelectorAll(
  ".text-content__buttons button"
);

let data;
function handleMobileMenu(event) {
  navbar.classList.toggle("open-menu");
}

function handleDestinationSelection(event) {
  switch (event.target.textContent) {
    case "Moon":
      fillDestinationCard(data.destinations[0]);
      break;
    case "Mars":
      fillDestinationCard(data.destinations[1]);
      break;
    case "Europa":
      fillDestinationCard(data.destinations[2]);
      break;
    case "Titan":
      fillDestinationCard(data.destinations[3]);
      break;
  }
}

function fillDestinationCard(cardData) {
  let name = cardData.name;
  let description = cardData.description;
  let distance = cardData.distance;
  let travel = cardData.travel;
  let image = cardData.images.png;
  image = "." + image
  
  document.querySelector("#destination__img").src = image;
  document.querySelector("#destination__title").textContent = name;
  document.querySelector("#destination__description").textContent = description;
  document.querySelector("#destination__distance").textContent = distance;
  document.querySelector("#destination__travel").textContent = travel;
}

function fetchData() {
  fetch("../json/data.json")
    .then((response) => response.json())
    .then((response) => {
      data = response;
    });
}

function init() {
  btnToggleMobileMenu.addEventListener("click", handleMobileMenu);

  btnsDestinationSelect.forEach((button) => {
    button.addEventListener("click", handleDestinationSelection);
  });
  fetchData();
}

init();
