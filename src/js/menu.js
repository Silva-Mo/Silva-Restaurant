import burgerImg from '../imgs/burger.png'

function createDish (name, price, description, img){
    return {
        name: name,
        price: price,
        description: description,
        img: img
    }
}

const burger = createDish("burger", "1299$", "Our top-tier burger, it's delicious, fancy and healthy too", burgerImg);

function createMenuDish (dish){
    const dishConatiner = document.createElement('div');
    const imgOfDish = new Image();
    const dishTxtContainer = document.createElement('div');
    const dishName = document.createElement('h2');
    const dishDescription = document.createElement ('h3');
    const dishPrice = document.createElement('h3');

    imgOfDish.src = dish.img;

    dishName.textContent = "Silva's" + " " + dish.name.charAt(0).toUpperCase() + dish.name.slice(1);;
    dishDescription.textContent = dish.description;
    dishPrice.textContent = dish.price;

    dishTxtContainer.appendChild(dishName);
    dishTxtContainer.appendChild(dishDescription);
    dishTxtContainer.appendChild(dishPrice);

    dishConatiner.classList.add('menu-element')
    dishConatiner.classList.add(`${dish.name}`);
    dishPrice.classList.add('price');

    dishConatiner.appendChild(dishTxtContainer);
    dishConatiner.appendChild(imgOfDish);

    return dishConatiner;
}

const burgerDiv = createMenuDish(burger);

const arrayOfElemnts = [burgerDiv];

export default arrayOfElemnts;