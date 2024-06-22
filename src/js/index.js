import '../css/normalize.css';
import '../css/styles.css';
import logo from '../imgs/restaurant-outline-svgrepo-com.svg'
import homeElements from './home';

const logoContainer = document.querySelector('.logo-container');
const imgLogo = new Image();
const txtLogo = document.querySelector('.logo-container h1')
const content = document.querySelector('.content');
const btns = document.querySelectorAll('.btn');

imgLogo.src = logo;
logoContainer.insertBefore(imgLogo, txtLogo);

appendChildren(homeElements);

function removeContent(){
    let allChildNodes = content.childNodes;
    allChildNodes.forEach((child) => {
        content.removeChild(child);
    })
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
            appendChildren(homeElements);
        })
    }
    else if (btn.classList.contains('2')){
        // btn.addEventListener('click', () => {
        //     appendChildren()
        // })
    }
})

