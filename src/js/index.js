import '../css/normalize.css';
import '../css/styles.css';
import logo from '../imgs/restaurant-outline-svgrepo-com.svg'
import homeElements from './home';
import menuElements from './menu'

const logoContainer = document.querySelector('.logo-container');
const imgLogo = new Image();
const txtLogo = document.querySelector('.logo-container h1')
const content = document.querySelector('.content');
const btns = document.querySelectorAll('.btn');

imgLogo.src = logo;
logoContainer.insertBefore(imgLogo, txtLogo);

appendChildren(homeElements);

function removeContent(){
    if  (content.firstChild === null){
        return;
    }
    content.firstChild.remove();
    if (content.childNodes.length === "0"){
        return;
    } 
    removeContent();
}

function appendChildren(moduleElements){
    removeContent();
    console.log(moduleElements);
    moduleElements.forEach((element) => {
        content.appendChild(element);
    })
}

btns.forEach((btn) => {
    if (btn.classList.contains('1')){
        btn.addEventListener('click', () => {
            content.style = "flex-direction: row"; 
            appendChildren(homeElements);
        })
    }
    else if (btn.classList.contains('2')){
        btn.addEventListener('click', () => {
            content.style = "flex-direction: column"; 
            appendChildren(menuElements);
        })
    }
})

