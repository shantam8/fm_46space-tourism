let btnToggleMobileMenu = document.querySelector("#btn-toggle-mobile-menu");
let navbar = document.querySelector(".nav__content");

let btnExplore = document.querySelectorAll("#btn__explore");
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
let indexPage;

function handleMobileMenu() {
  let urlHamburger;
  let urlClose;
  if (indexPage) {
    urlHamburger = 'url("./assets/shared/icon-hamburger.svg")';
    urlClose = 'url("./assets/shared/icon-close.svg")';
  } else {
    urlHamburger = 'url("../assets/shared/icon-hamburger.svg")';
    urlClose = 'url("../assets/shared/icon-close.svg")';
  }

  if (navbar.classList.contains("open-menu")) {
    setTimeout(() => {
      navbar.classList.toggle("display-none");
    }, 250);
    navbar.classList.toggle("open-menu");
    btnToggleMobileMenu.style.backgroundImage = urlHamburger;
  } else {
    setTimeout(() => {
      navbar.classList.toggle("open-menu");
    }, 50);
    navbar.classList.toggle("display-none");
    btnToggleMobileMenu.style.backgroundImage = urlClose;
  }
}

function handleDestinationSelection(event) {
  btnsDestinationSelect.forEach((button) => {
    button.classList.remove("active");
  });

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
  event.target.classList.add("active");
}

function fillDestinationCard(cardData) {
  let name = cardData.name;
  let description = cardData.description;
  let distance = cardData.distance;
  let travel = cardData.travel;
  let image = cardData.images.png;

  document.querySelector("#destination__img").src = image;
  document.querySelector("#destination__title").textContent = name;
  document.querySelector("#destination__description").textContent = description;
  document.querySelector("#destination__distance").textContent = distance;
  document.querySelector("#destination__travel").textContent = travel;
}

function handleCrewSelection(event) {
  btnsCrewSelect.forEach((button) => {
    button.classList.remove("active");
  });
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
  event.target.classList.add("active");
}

function fillCrewCard(cardData) {
  let image = cardData.images.png;
  let rank = cardData.role;
  let name = cardData.name;
  let description = cardData.bio;

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
  btnsTechnologySelect.forEach((button) => {
    button.classList.remove("active");
  });
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
  event.target.classList.add("active");
}

function fillTechnologyCard(cardData) {
  let name = cardData.name;
  let description = cardData.description;
  let imageLandscape = cardData.images.landscape;
  let imagePortrait = cardData.images.portrait;

  document.querySelector("#technology__title").textContent = name;
  document.querySelector("#technology__description").textContent = description;
  document.querySelector("#technology__imgPortrait").srcset = imagePortrait;
  document.querySelector("#technology__imgLandscape").src = imageLandscape;
  document
    .querySelector("#technology__imgLandscape")
    .setAttribute("aria-label", name);
  document.querySelector("#technology__imgLandscape").alt = name;
}

function fetchData() {
  let fetchUrl;
  indexPage
    ? (fetchUrl = "./json/data.json")
    : (fetchUrl = "../json/data.json");

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((response) => {
      data = response;
    });
}

function init() {
  btnToggleMobileMenu.addEventListener("click", handleMobileMenu);
  btnExplore.forEach((button) => {
    button.addEventListener("click", () => {
      window.open("./pages/destination.html", "_self");
    });
  });
  btnsDestinationSelect.forEach((button) => {
    button.addEventListener("click", handleDestinationSelection);
  });
  btnsCrewSelect.forEach((button) => {
    button.addEventListener("click", handleCrewSelection);
  });
  btnsTechnologySelect.forEach((button) => {
    button.addEventListener("click", handleTechnologySelection);
  });

  window.addEventListener("resize", () => {
    if (navbar.classList.contains("open-menu") && screen.width >= 768) {
      btnToggleMobileMenu.click();
    } else if (!navbar.classList.contains("open-menu") && screen.width >= 768) {
      navbar.classList.remove("display-none");
    } else if (screen.width < 768) {
      navbar.classList.add("display-none");
      navbar.classList.remove("open-menu");
      indexPage
        ? (btnToggleMobileMenu.style.backgroundImage =
            'url("./assets/shared/icon-hamburger.svg")')
        : (btnToggleMobileMenu.style.backgroundImage =
            'url("../assets/shared/icon-hamburger.svg")');
    }
  });

  if (!navbar.classList.contains("open-menu") && screen.width >= 768) {
    btnToggleMobileMenu.click();
  }
  document.title == "Space Tourism" ? (indexPage = true) : (indexPage = false);

  console.log(document.title);

  fetchData();
}

init();
