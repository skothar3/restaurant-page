import corleoneImgSrc from './images/corleone.jpg';

const contentMain = document.querySelector('main#content');

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
const sliderDiv = document.createElement('div');
sliderDiv.classList.add('slider');
const centerBtn = document.createElement('button');
centerBtn.classList.add('special');
const corleoneImg = new Image();
const welcomeP = document.createElement('p');
welcomeP.classList.add('welcome');

centerBtn.textContent = "STAY IN THE LOOP";
corleoneImg.src = corleoneImgSrc;

welcomeP.textContent = "Welcome to Pazzo. We guarantee you will have a revelatory experience with us."

function addHomepage() {
  sliderDiv.appendChild(corleoneImg);
  sliderDiv.appendChild(centerBtn);

  containerDiv.appendChild(sliderDiv);
  containerDiv.appendChild(welcomeP);

  contentMain.appendChild(containerDiv);
}

export default addHomepage
