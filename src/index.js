import './style.css';
import corleoneImgSrc from './images/corleone.jpg';

const sliderDiv = document.querySelector('div.slider');
const corleoneImg = new Image();

corleoneImg.src = corleoneImgSrc;

sliderDiv.prepend(corleoneImg);
