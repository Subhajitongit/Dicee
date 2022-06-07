var random1 = Math.floor(Math.random() * 6);
random1++;


var random2 = Math.floor(Math.random() * 6);
random2++;


document.querySelectorAll("img")[0].setAttribute("src","images/dice"+random1.toString()+".png");
document.getElementById("img2").src = "images/dice"+random2.toString()+".png";

var title = "";
if(random1 > random2) {
    title = "🚩Player 1 wins!";
}
else if(random1 < random2) {
    title = "Player 2 wins🚩";
}
else {
    title = "Draw😬";
}

document.querySelector("h1").innerHTML = title;