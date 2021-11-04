// Variables
const slider = document.getElementById('slider'),
			sliderWrapper = slider.querySelector('.slider-wrapper'),
			sliderItems = slider.querySelectorAll('.slider-item'),
			sliderItemsLength = sliderItems.length,
			btnStop = document.getElementById('detener');

sliderWrapper.style.width = `${ 100 * sliderItemsLength }%`;
sliderItems.forEach(item => {
	item.style.width = `${ 100 / sliderItemsLength }%`;
});

let dir = 'r';
let position = 0;
let stop = false;

btnStop.addEventListener('click', () => {
	stop = !stop;

	btnStop.textContent = stop ? 'Reanudar' : 'Detener';
});

setInterval(() => {

	if(!stop) {
		if(dir === 'r') {
			if(position !== sliderItemsLength - 1) {
				position++;
			}else { dir = 'l'; }
		}else {
			if(position !== 0) {
				position--;
			}else { dir = 'r'; }
		}

		sliderWrapper.style.transform = `translate(-${(100 / sliderItemsLength) * position}%)`;
	}

}, 4000);
