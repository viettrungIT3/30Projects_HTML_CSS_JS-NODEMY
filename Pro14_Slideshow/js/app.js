let listDivImg = document.querySelectorAll('.list-img div');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let imgWrap = document.querySelector('.img-wrap img');

let currentIndex = 2;

console.log(listDivImg);
console.log(listDivImg[currentIndex].querySelector('img').src);

function setCurrent(index) {
	currentIndex = index;
	imgWrap.src = listDivImg[currentIndex].querySelector('img').src;

	// remove all active img
	listDivImg.forEach((item) => {
		item.classList.remove('active')
	})

	// set active
	listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((img, index) => {
	img.addEventListener('click', () => {
		setCurrent(index);
	})
})

next.addEventListener('click', () => {
	if (currentIndex == listDivImg.length - 1) {
		currentIndex = 0;
	} else currentIndex++

	setCurrent(currentIndex);
})

prev.addEventListener('click', () => {
	if (currentIndex == 0) {
		currentIndex = listDivImg.length - 1;
	} else currentIndex--

	setCurrent(currentIndex);
})

document.addEventListener('keydown', function (e) {
	switch (e.keyCode) {
		case 37:
			if (currentIndex == 0) {
				currentIndex = listDivImg.length - 1;
			} else currentIndex--

			setCurrent(currentIndex);
			break;

		case 39:
			if (currentIndex == listDivImg.length - 1) {
				currentIndex = 0;
			} else currentIndex++

			setCurrent(currentIndex);
			break;

	}
});

