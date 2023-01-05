function handsOn() {

  var randomImageNumber = Math.round(Math.random() * 5) + 1;

  var randomImageNumberTwo = Math.round(Math.random() * 5) + 1;

  var yourImage = "images/" + randomImageNumber + ".png";

  var yourImage2 = "images/" + randomImageNumberTwo + ".png";

  var look1 = document.querySelectorAll("img")[0].setAttribute("src", yourImage);

  var look2 = document.querySelectorAll("img")[1].setAttribute("src", yourImage2);

  if (randomImageNumberTwo == 3 || (randomImageNumber == 3 && randomImageNumberTwo == 3 ) ) {
    document.querySelector("p.you").style.textShadow = "none";
    document.querySelector("p.anotherYou").style.textShadow = "0 2px 6px #e9caca";
    document.querySelector("h2").innerHTML = "You lose";
  } else if (randomImageNumber == 3) {
    document.querySelector("p.you").style.textShadow = "0 2px 6px #e9caca";
    document.querySelector("p.anotherYou").style.textShadow = "none"
    document.querySelector("h2").innerHTML = "You won";
  } else {
    document.querySelector("p.anotherYou").style.textShadow = "none"
    document.querySelector("p.you").style.textShadow = "none";
    document.querySelector("h2").innerHTML = "Tic Tac";
  }
};
