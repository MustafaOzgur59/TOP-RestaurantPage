function createMain() {
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "mainContent");
  const mainCard = createMainCard();
  mainContent.appendChild(mainCard);
  return mainContent;
}

function createMainCard() {
  const mainCard = document.createElement("div");
  const title = document.createElement("h2");
  const titleText = `We Bake With 
                      Passion`;
  title.innerText = titleText;

  mainCard.setAttribute("id", "mainCard");
  mainCard.append(title);

  return mainCard;
}

function loadHome() {
  const container = document.querySelector("#mainContent");
  container.innerHTML = "";
  container.appendChild(createMainCard());
  return container;
}

export { createMain, loadHome };
