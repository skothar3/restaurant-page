import "./menu.css";
import fungiImgSrc from "./images/fungi.jpg";

const contentMain = document.querySelector("main#content");
const containerDiv = document.createElement("div");
containerDiv.classList.add("menupage_container");
const sliderDiv = document.createElement("div");
sliderDiv.classList.add("slider");
const menuHeading = document.createElement("h1");
menuHeading.textContent = "PAZZO MENU";
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu_container");

const fungiImg = new Image();
fungiImg.src = fungiImgSrc;

sliderDiv.appendChild(fungiImg);
sliderDiv.appendChild(menuHeading);

containerDiv.appendChild(sliderDiv);
containerDiv.appendChild(menuContainer);

function addMenuPage() {
  contentMain.appendChild(containerDiv);
}
const menuItems = [
  // {{{
  {
    course: "appetizers",
    name: "CAESAR SALAD",
    description: "ROMAINE, BACON, GARLIC CROUTONS AND PAZZO CAESAR DRESSING",
    price: "16",
  },
  {
    course: "appetizers",
    name: "NIZZARDA SALAD",
    description:
      "ARUGULA, TUNA, FINGERLING POTATOES, RED ONION, CHERRY TOMATOES, GREEN BEANS, KALAMATA OLIVES, LEMON VINAIGRETTE",
    price: "16",
  },
  {
    course: "appetizers",
    name: "FUNGHI CROSTINI",
    description:
      "SAUTÉED MUSHROOMS WITH THYME AND GARLIC, GOAT CHEESE RICOTTA SPREAD AND SHAVED PARMIGIANO",
    price: "14",
  },
  {
    course: "pasta",
    name: "SPAGHETTI AND MEATBALLS",
    description:
      "MCINTOSH FARMS BEEF MEATBALLS WITH PAZZO TOMATO SAUCE PARMIGIANO AND FRESH BASIL",
    price: "22",
  },
  {
    course: "pasta",
    name: "PENNE MILANO",
    description:
      "A GUEST FAVOURITE IS BACK! ROAST CHICKEN, GARLIC AND SPINACH IN A LEMON CREAM SAUCE",
    price: "26",
  },
  {
    course: "pizza",
    name: "CAPRESE",
    description: "FIOR DI LATTE, SUN DRIED TOMATOES, BASIL, BALSAMIC GLAZE",
    price: "21",
  },
  {
    course: "pizza",
    name: "DON CORLEONE",
    description: "PEPPERONI, PANCETTA, ROASTED RED PEPPERS, BASIL",
    price: "21",
  },
  {
    course: "pizza",
    name: "ZA ZA GABOR",
    description:
      "ITALIAN SAUSAGE, ROASTED RED PEPPERS, GOAT CHEESE, PESTO, ARUGULA",
    price: "22",
  },
  {
    course: "dessert",
    name: "LEMON CURD TART",
    description: "CANDIED ORANGE ZEST",
    price: "10",
  },
  {
    course: "dessert",
    name: "PAZZO TIRAMISU",
    description:
      "ESPRESSO AND MARSALA SOAKED LADY FINGERS, MASCARPONE MOUSSE AND ESPRESSO DULCE DE LECHE SAUCE",
    price: "11",
  },
  {
    course: "dessert",
    name: "AFFOGATO",
    description: "VANILLA GELATO AND ESPRESSO",
    price: "9",
  },
];
// }}}

const menuCourses = [];
menuItems.forEach((item) => {
  if (!menuCourses.includes(item.course)) {
    menuCourses.push(
      item.course
    );

    const courseContainer = document.createElement("div");
    courseContainer.classList.add("course_container");
    courseContainer.dataset.course = item.course;
    const courseName = document.createElement("h2");
    courseName.textContent = item.course.charAt(0).toUpperCase() + item.course.slice(1);

    courseContainer.appendChild(courseName);
    menuContainer.appendChild(courseContainer);
  }
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item_container");
  itemContainer.classList.add(`${item.course}`);
  const itemName = document.createElement("h3");
  itemName.textContent = item.name;
  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.description;
  const itemPrice = document.createElement("p");
  itemPrice.textContent = item.price;

  itemContainer.appendChild(itemName);
  itemContainer.appendChild(itemDescription);
  itemContainer.appendChild(itemPrice);

  const courseContainer = menuContainer.querySelector(
    `div.course_container[data-course=${item.course}]`,
  );
  courseContainer.appendChild(itemContainer);
});

export default addMenuPage;
