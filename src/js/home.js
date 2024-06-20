const h2 = document.createElement('h2');
const paraOfintro = document.createElement('p');
const enjoyTxt = document.createElement('h3');

h2.textContent = "Who we are:";
paraOfintro.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, orci eget efficitur placerat, dui magna congue nulla, eu consectetur felis diam et diam. Vivamus id scelerisque elit. Donec ac condimentum nisl. In scelerisque imperdiet metus, eu pulvinar metus varius ac. Integer accumsan libero nec metus fermentum posuere. Nullam molestie lectus vitae mi condimentum, ultrices dictum leo eleifend. Donec felis eros, vestibulum gravida aliquam at, vehicula nec diam. Nunc bibendum, massa et faucibus lobortis, justo urna aliquam ligula, non semper mauris elit venenatis erat.";
enjoyTxt.textContent= "Enjoy our dishes :)";

const arrayOfElemnts = [h2,paraOfintro,enjoyTxt];

export default arrayOfElemnts;

