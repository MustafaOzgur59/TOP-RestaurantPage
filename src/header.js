import loadContact from "./contactContent";
import { loadHome } from "./mainContent";
import loadMenu from "./menuContent";

function createHeaderCard() {
  let header = document.createElement("div");
  let logo = document.createElement("h1");
  let btnContainer = document.createElement("div");
  let homeBtn = document.createElement("button");
  let menuBtn = document.createElement("button");
  let aboutBtn = document.createElement("button");
  header.setAttribute("id", "header");
  header.append(logo, btnContainer);

  logo.innerText = "Sugar Daddy";

  btnContainer.append(homeBtn, menuBtn, aboutBtn);
  btnContainer.setAttribute("id", "container");

  homeBtn.classList.add("navButton");
  homeBtn.classList.add("active");
  homeBtn.textContent = "Home";
  menuBtn.classList.add("navButton");
  menuBtn.textContent = "Menu";
  aboutBtn.classList.add("navButton");
  aboutBtn.textContent = "Contact";

  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(homeBtn);
    loadHome();
  });

  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(menuBtn);
    loadMenu();
  });

  aboutBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(aboutBtn);
    loadContact();
  });

  return header;
}

function setActive(button) {
  const buttons = [...document.querySelectorAll(".navButton")];

  for (let btn of buttons) {
    btn.classList.remove("active");
  }

  button.classList.add("active");
}

export default createHeaderCard;
