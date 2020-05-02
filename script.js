var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("randomColor");

color1.value = "#FF0000";
color2.value = "#FFFF00";
css.textContent = window.getComputedStyle(body, null).backgroundImage + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var r = parseInt(Math.random()*255).toString(16);
	var g = parseInt(Math.random()*255).toString(16);
	var b = parseInt(Math.random()*255).toString(16);
	if(r.length < 2) r = "0" + r;
	if(g.length < 2) g = "0" + g;
	if(b.length < 2) b = "0" + b;
	return "#" + r + g + b;
}

function newBGColor() {
	var c1 = randomColor();
	var c2 = randomColor();
	color1.value = c1;
	color2.value = c2;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", newBGColor);