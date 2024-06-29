import building from '../imgs/restaurant.jpg';

const txtContainer = document.createElement('div');
const title = document.createElement('h1');
const callNumber = document.createElement('h2');
const email = document.createElement('h2');
const locationTxt = document.createElement('h2');
const imagesContainer = document.createElement('div');
const location = document.createElement('iframe');
const restaurantBuilding = new Image();

txtContainer.classList.add('contact-txt')
imagesContainer.classList.add('imgs-container');

restaurantBuilding.src = building;
title.textContent = "Contact us !";
callNumber.textContent = "☎️ Call Us:  +1(111)111-1111";
email.textContent = "📩 Email Us: restaurant@fraud.com";
locationTxt.textContent = "📍location: Kiribati - Vostok Island";

txtContainer.appendChild(title);
txtContainer.appendChild(callNumber);
txtContainer.appendChild(email);
txtContainer.appendChild(locationTxt);

location.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5833.28899408339!2d-152.3112369222581!3d-10.063212553796948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sae!4v1719659715604!5m2!1sen!2sae');
imagesContainer.appendChild(location);
imagesContainer.appendChild(restaurantBuilding);

const arrayOfElemnts = [txtContainer, imagesContainer];

export default arrayOfElemnts;