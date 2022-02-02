let btnToggleMobileMenu = document.querySelector("#btn-toggle-mobile-menu");
let navbar = document.querySelector(".nav__content");

let btnsDestinationSelect = document.querySelectorAll(
  ".text-content__destination-buttons button"
);
let btnsCrewSelect = document.querySelectorAll(
  ".text-content__crew-buttons button"
);
let btnsTechnologySelect = document.querySelectorAll(
  ".text-content__technology-buttons button"
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
  image = "." + image;

  document.querySelector("#destination__img").src = image;
  document.querySelector("#destination__title").textContent = name;
  document.querySelector("#destination__description").textContent = description;
  document.querySelector("#destination__distance").textContent = distance;
  document.querySelector("#destination__travel").textContent = travel;
}

function handleCrewSelection(event) {
  switch (event.target.value) {
    case "0":
      fillCrewCard(data.crew[0]);
      break;
    case "1":
      fillCrewCard(data.crew[1]);
      break;
    case "2":
      fillCrewCard(data.crew[2]);
      break;
    case "3":
      fillCrewCard(data.crew[3]);
      break;
  }
}

function fillCrewCard(cardData) {
  console.log("asd");
  let image = cardData.images.png;
  let rank = cardData.role;
  let name = cardData.name;
  let description = cardData.bio;
  image = "." + image;

  document.querySelector("#crew__img").src = image;
  document
    .querySelector("#crew__img")
    .setAttribute("aria-label", "image " + rank);
  document.querySelector("#crew__img").alt = rank;
  document.querySelector("#crew__rank").textContent = rank;
  document.querySelector("#crew__name").textContent = name;
  document.querySelector("#crew__description").textContent = description;
}

function handleTechnologySelection(event) {
  switch (event.target.textContent) {
    case "1":
      fillTechnologyCard(data.technology[0]);
      break;
    case "2":
      fillTechnologyCard(data.technology[1]);
      break;
    case "3":
      fillTechnologyCard(data.technology[2]);
      break;
  }
}

function fillTechnologyCard(cardData) {
  let name = cardData.name;
  let description = cardData.description;

  document.querySelector("#technology__title").textContent = name;
  document.querySelector("#technology__description").textContent = description;
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

  btnsCrewSelect.forEach((button) => {
    button.addEventListener("click", handleCrewSelection);
  });

  btnsTechnologySelect.forEach((button) => {
    button.addEventListener("click", handleTechnologySelection);
  });
  fetchData();
}

init();
