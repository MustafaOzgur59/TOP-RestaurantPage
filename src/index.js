import "./style.css";
import { createMain } from "./mainContent";
import createHeaderCard from "./header";
import githubIcon from "./githubBlack.png";

function getFooter() {
  let footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  const gitName = document.createElement("a");
  gitName.innerText = "MustafaOzgur59";
  gitName.href = "https://github.com/MustafaOzgur59";
  const githubLogo = document.createElement("img");
  githubLogo.src = githubIcon;
  githubLogo.setAttribute("id", "githubLogo");
  footer.append(githubLogo, gitName);

  return footer;
}

function homePage() {
  let content = document.createElement("div");
  let mainContent = createMain();
  let header = createHeaderCard();
  let footer = getFooter();

  content.setAttribute("id", "content");
  content.append(header, mainContent, footer);

  document.body.appendChild(content);
}

homePage();
