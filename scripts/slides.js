
var slideIndex = 1;
var carouselDelay = 5; // in seconds

//Uncomment to enable carousel:
//carousel();

//showDivs(slideIndex, "slides");

function plusDivs(n, name) {
	var slides = document.getElementsByClassName(name);
	var i;
	for (i = 0; i < slides.length; i++)
		if(slides[i].style.display == "block")
			index = i;
	
	index += n;
	showDivs(index, name);
}

function showDivs(index, name) {
	var i;
	var slides = document.getElementsByClassName(name);
	var dots = document.getElementsByClassName(name + "Dots");

	for (i = 0; i < slides.length; i++) {
		if(slides[i].style.display == "block")
			slides[i].style.display = "none";
	}

	if (index >= slides.length) { index = 0; }
	if (index < 0 ) { index = slides.length - 1; }

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" " + name + "Dots-selected", "");
	}
	slides[index].style.display = "block";
	dots[index].className += " " + name + "Dots-selected";
}



/*

function carousel() {
	plusDivs(+1);
	setTimeout(carousel, carouselDelay * 1000);
}

*/