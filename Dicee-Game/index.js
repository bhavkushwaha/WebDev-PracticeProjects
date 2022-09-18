var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6

var randomDiceImg = "dice"+randomNumber1+".png"; //dice1.png-dice6.png

var randomImageSrc = "images/"+randomDiceImg; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSrc);

var randomNumber2 = Math.floor(Math.random()*6) + 1; //1-6

var randomDiceImg2 = "dice"+randomNumber2+".png"; //dice1.png-dice6.png

var randomImageSrc2 = "images/"+randomDiceImg2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSrc2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 WINS! 🚩";}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 WINS! 🚩";}
else
{
  document.querySelector("h1").innerHTML = "DRAW!";
}
