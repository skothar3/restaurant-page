import "./style.css";
import addHomepage from "./homepage.js";
import addMenuPage from "./menu.js";

const contentMain = document.querySelector("main#content");
const logoBtn = document.querySelector("input.logo");
const menuBtn = document.querySelector("button.menu");
const contactBtn = document.querySelector("button.contact");

logoBtn.addEventListener("click", () => {
  contentMain.replaceChildren();
  addHomepage();
})

menuBtn.addEventListener("click", () => {
  contentMain.replaceChildren();
  addMenuPage();
})

addHomepage();
