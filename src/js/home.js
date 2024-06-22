import aboutImg from '../imgs/about.png';

const txtContainer = document.createElement('div');
const h2 = document.createElement('h2');
const paraOfintro = document.createElement('p');
const enjoyTxt = document.createElement('h3');

h2.textContent = "Who we are:";
paraOfintro.textContent = "Silva's Restaurant is your ultimate choice when you are hungry, or even angry. We offer high-quality food with the best and lowest (this is not a lie actually) prices in the market, and you should believe it. Any complaints about our prices will never be on consideration becuase we believe that the customer is always wrong and greedy, be generous and BUY OUR FOOD RIGHT NOW YOU $#@%!";
enjoyTxt.textContent= "Enjoy our dishes :)";
txtContainer.classList.add('txtContainer');

txtContainer.appendChild(h2);
txtContainer.appendChild(paraOfintro);
txtContainer.appendChild(enjoyTxt);

const aboutImageElement = new Image();
aboutImageElement.src = aboutImg;

const arrayOfElemnts = [txtContainer, aboutImageElement];

export default arrayOfElemnts;

