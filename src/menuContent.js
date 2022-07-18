function createMenuCard() {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menuCard");
  const title = document.createElement("div");
  title.setAttribute("id", "menuTitle");
  const titleTextDiv = document.createElement("h4");
  titleTextDiv.setAttribute("id", "titleText");
  const menuTextDiv = document.createElement("h2");
  titleTextDiv.innerText = "Bakery";
  menuTextDiv.innerText = "MENU";
  title.append(titleTextDiv, menuTextDiv);

  const menuİtems = document.createElement("div");
  menuİtems.setAttribute("id", "menuItems");
  menuİtems.append(
    createCard("LOAVES"),
    createCard("PASTRIES"),
    createCard("CAKES"),
    createCard("DRINKS")
  );
  menuCard.append(title, menuİtems);
  return menuCard;
}

function createCard(heading) {
  const container = document.createElement("div");
  container.setAttribute("id", "menuItem");
  const header = document.createElement("h3");
  header.innerText = heading;
  const productCard = document.createElement("ul");
  for (let i = 1; i < 5; i++) {
    let product = document.createElement("li");
    product.innerText = `${i}. Product name .......... $2.5`;
    productCard.appendChild(product);
    productCard.setAttribute("id", "menuList");
  }
  container.append(header, productCard);
  return container;
}

function loadMenu() {
  const container = document.querySelector("#mainContent");
  container.innerHTML = "";
  container.appendChild(createMenuCard());
  return container;
}

export default loadMenu;
