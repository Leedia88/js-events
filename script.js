//1 bis
let footer = document.querySelector("footer");
let x = 0;
function clique(){
    x +=1;
    console.log(`clic numéro ${x}`);
}
footer.addEventListener("click", clique);
//2

let elementDuDOM = document.getElementById("navbarHeader");
let bouton = document.querySelector(".navbar-toggler-icon");
function toggle(){
    elementDuDOM.classList.toggle("collapse");
}
bouton.addEventListener("click", toggle);

//3
let card = document.querySelectorAll(".card")[0];
function red(){
    card.style.color = "red"
}
let buttonEdit = card.querySelector(".btn-outline-secondary");
console.log(buttonEdit);
buttonEdit.addEventListener("click", red);

//4
let cardSecondary = document.querySelectorAll(".card")[1];
function green(){
if (cardSecondary.style.color === 'green'){
    cardSecondary.style.color = '' ;
    }
else {
    cardSecondary.style.color = 'green';
}}
let buttonEditSecondary = cardSecondary.querySelector(".btn-outline-secondary");
buttonEditSecondary.addEventListener("click", green);

//5
let navbar = document.getElementsByClassName("navbar")[0];
navbar.addEventListener('dblclick', function (e) {
    card.classList.toggle('large');
  });