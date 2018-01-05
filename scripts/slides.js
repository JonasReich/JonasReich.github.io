
function showSlide(targetId, slideIndex) {
	const slideContainer = document.getElementById(targetId);
	const slides = slideContainer.children;

	while (slideIndex >= slides.length) { slideIndex -= slides.length; }
	while (slideIndex < 0) { slideIndex += slides.length; }


	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		if (i == slideIndex) {
			var selectedSlide = slide;
			slide.classList.add("selected");
		}
		else
			slide.classList.remove("selected");
	}
	const slideRootChildren = slideContainer.parentNode.parentNode.children;
	for (let i = 0; i < slideRootChildren.length; i++) {
		const child = slideRootChildren[i];
		if (child.classList.contains("slides-bar-anchor")) {
			var barElements = child.children[0].children;
			for (let j = 0; j < barElements.length; j++) {
				const element = barElements[j];
				if (element.classList.contains("slide-caption"))
					// supply caption
					if(selectedSlide.alt !== "")
					{
						element.style.display = 'block';
						element.children[0].innerHTML = selectedSlide.alt;
					}
					else
					element.style.display = 'none';
				else if (element.classList.contains("slide-dots")) {
					for (let k = 0; k < element.children.length; k++) {
						const dot = element.children[k];
						if (k == slideIndex)
							dot.classList.add("selected");
						else {
							console.debug(k + "!=" + slideIndex);
							dot.classList.remove("selected");
						}
					}
				}
			}
			return;
		}
	}
}

function getSelectedSlideIndex(targetId) {
	var slideContainer = document.getElementById(targetId);
	for (let i = 0; i < slideContainer.children.length; i++) {
		const child = slideContainer.children[i];
		if (child.classList.contains("selected")) {
			return i;
		}
	}
	return -1;
}

function moveSlide(targetId, slideIndexDelta) {
	var slelectedIndex = getSelectedSlideIndex(targetId);
	if (slelectedIndex == -1) {
		console.error("Inavlid slide index");
		return;
	}
	showSlide(targetId, slelectedIndex + slideIndexDelta);
}

// Display initial slides
var slideContainers = document.getElementsByClassName("slides");
for (const slideContainer of slideContainers) {
	showSlide(slideContainer.id, 0);
}
