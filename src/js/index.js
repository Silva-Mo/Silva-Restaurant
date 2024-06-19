import '../css/normalize.css';
import '../css/styles.css';
import logo from '../imgs/restaurant-outline-svgrepo-com.svg'

const logoContainer = document.querySelector('.logo-container');
const imgLogo = new Image();
const txtLogo = document.querySelector('.logo-container h1')

imgLogo.src = logo;
logoContainer.insertBefore(imgLogo, txtLogo);