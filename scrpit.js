var random=Math.floor(Math.random()*6)+1;
var address="images/dice"+ random+ ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",address);

var random2=Math.floor(Math.random()*6)+1;
var address="images/dice"+ random2+ ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",address);

if(random > random2)
document.querySelector("h1").innerHTML="player 1 wins!!";

else if(random2 > random)
document.querySelector("h1").innerHTML="player 2 wins!!";

else
document.querySelector("h1").innerHTML="It's a DRAW";