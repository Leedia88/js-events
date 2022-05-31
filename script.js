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
let navbar = document.querySelector("header");
let linkTag = document.querySelector("link");
let bootstrap = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
navbar.addEventListener('dblclick', function (e) {
    if (linkTag.href != bootstrap){
        linkTag.href = bootstrap;
    }else{
        linkTag.href = "#";
    }
  });

  //6
  let cards = document.querySelectorAll(".card");
  let image = cards[0].querySelector(".card-img-top");
  let success = cards[0].querySelector(".btn-success");
  let cardText = cards[0].querySelector(".card-text");
  success.addEventListener("mouseover", function modif(e){
      if (image.style.width != "20%"){
        image.style.width = "20%"
      }
      else {
        image.style.width = "100%"
      }
      cardText.classList.toggle("collapse");});
  
  //7 !! pb with click?
  let parent = document.querySelectorAll(".row")[1];
  let arrow = document.querySelector(".btn-secondary");
  arrow.addEventListener("click", function(e){
      let last = parent.lastElementChild;
      let first = parent.firstElementChild;
      parent.insertBefore(last, first);
  });

  //8
let arrowLeft = document.querySelector(".btn-primary");
 console.log(arrowLeft);
 arrowLeft.href = "#";
  arrowLeft.addEventListener("click", function(e){
      parent.insertBefore(parent.firstElementChild, parent.lastChild.nextElementSibling);
      
  })

  //9
