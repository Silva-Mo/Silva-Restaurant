import '../css/normalize.css';
import '../css/styles.css';
import logo from '../imgs/restaurant-outline-svgrepo-com.svg';
import github from '../imgs/github-mark.svg';
import homeElements from './home';
import menuElements from './menu';
import contactElemnts from './contact';

const logoContainer = document.querySelector('.logo-container');
const txtLogo = document.querySelector('.logo-container h1');
const content = document.querySelector('.content');
const btns = document.querySelectorAll('.btn');
const footerGithubLinkContainer = document.querySelector('#footer .github-container');

const imgLogo = new Image();
const githubLogo = new Image();
const logoImgContainerLink = document.createElement('a');
const logoTxtLink = document.createElement('a');
const logoTxtContainerLink = document.createElement('div');

logoImgContainerLink.setAttribute('href', 'https://github.com/Silva-Mo/Silva-Restaurant');
logoTxtLink.setAttribute('href', 'https://github.com/Silva-Mo/Silva-Restaurant');
imgLogo.src = logo;
githubLogo.src = github;

logoTxtLink.textContent = "Silva-Mo"
logoContainer.insertBefore(imgLogo, txtLogo);
logoImgContainerLink.appendChild(githubLogo);
logoTxtContainerLink.appendChild(logoTxtLink);

footerGithubLinkContainer.appendChild(logoImgContainerLink);
footerGithubLinkContainer.appendChild(logoTxtContainerLink);

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
            content.classList.add('animate');     
            content.style = "flex-direction: row"; 
            appendChildren(homeElements);
        })
    }
    else if (btn.classList.contains('2')){
        btn.addEventListener('click', () => {
            content.classList.add('animate');
            content.style = "flex-direction: column"; 
            appendChildren(menuElements);
        })
    }
    else if (btn.classList.contains('3')){
        btn.addEventListener('click', () => {
            content.classList.add('animate');
            content.style = "flex-direction: column"; 
            appendChildren(contactElemnts);
        })
    }
})

content.addEventListener("animationend", (e) => {
    if (content.classList.contains('animate') === true){
        e.target.classList.remove('animate');
    }
})