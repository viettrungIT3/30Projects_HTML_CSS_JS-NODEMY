const container = document.querySelector('.container');
const range = document.querySelector('.range');
const rangeBar = document.querySelector('.range-bar');

function setRangeBar(percent) {
	rangeBar.style.width = `${percent}%`
	rangeBar.querySelector('span').innerText = `${percent}%`
	container.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}

range.addEventListener('mousemove', function (e) {
	const process = e.pageX - this.offsetLeft;
	let percent = (process / this.offsetWidth) * 100;
	percent = Math.ceil(percent);
	console.log(percent);
	setRangeBar(percent);
})

setRangeBar(40);