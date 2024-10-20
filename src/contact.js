import "./contact.css";
import mapImgSrc from "./images/map.png";

const contentMain = document.querySelector("main#content");
const containerDiv = document.createElement("div");
containerDiv.classList.add("contactpage_container");
const sliderDiv = document.createElement("div");
sliderDiv.classList.add("slider");
const infoContainer = document.createElement("div");
infoContainer.classList.add("info_container");

const mapImg = new Image();
mapImg.src = mapImgSrc;

sliderDiv.appendChild(mapImg);
containerDiv.appendChild(infoContainer);
containerDiv.appendChild(sliderDiv);

function addContactPage() {
  contentMain.appendChild(containerDiv);
}

const infoHeading = document.createElement("h1");
infoHeading.textContent = "HOURS & LOCATION";
const addressP = document.createElement("p");
addressP.textContent = "70 Ontario St, Stratford, ON N5A 3H2 (519) 273-6666 info@pazzo.ca";
const instructionsP = document.createElement("p");
instructionsP.textContent = "Pazzo Pizzeria is located at cellar level and Café Bouffon is located at street level."
const hoursContainer = document.createElement("div");
hoursContainer.classList.add("hours_container")
const hoursHeading = document.createElement("p");
hoursHeading.innerHTML = "<span>Pazzo Hours</span>";
const monday = document.createElement("p");
monday.innerHTML = "<span>Monday:</span> Closed";
const tuesday_thursday = document.createElement("p");
tuesday_thursday.innerHTML = "<span>Tuesday - Thursday:</span> 11:30am - 9:00pm";
const friday_saturday = document.createElement("p");
friday_saturday.innerHTML = "<span>Friday and Saturday:</span> 11:30am - 10:00pm";
const sunday = document.createElement("p");
sunday.innerHTML = "<span>Sunday:</span> 11:30am - 9:00pm";

hoursContainer.append(hoursHeading, monday, tuesday_thursday, friday_saturday, sunday);
infoContainer.appendChild(infoHeading);
infoContainer.append(addressP, instructionsP, hoursContainer);

export default addContactPage;
