const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let counter = 0;

function nextSlide() {
	if(counter === 6) {
		counter = -1;
	}

	counter++;

	container.style.backgroundImage = `url(img/img${counter}.jpg)`;
	container.animate([{opacity:"0.2"}, {opacity:"1.0"}], {duration:750, fil:"forwards"});


}

function prevSlide() {
	if(counter === 0) {
		counter = 7;
	}

	counter--;

	container.style.backgroundImage = `url(img/img${counter}.jpg)`;
	container.animate([{opacity:"0.2"}, {opacity:"1.0"}], {duration:750, fil:"forwards"});


}