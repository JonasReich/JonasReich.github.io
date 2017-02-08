
var slideIndex = 1;
var carouselDelay = 5; // in seconds

//Uncomment to enable carousel:
//carousel();

showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("slideDots");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" slideDots-selected", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " slideDots-selected";
}

function carousel() {
	plusDivs(+1);
	setTimeout(carousel, carouselDelay * 1000);
}