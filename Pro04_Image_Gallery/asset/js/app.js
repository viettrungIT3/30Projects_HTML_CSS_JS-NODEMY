const images = document.querySelectorAll('.container__imgage img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let iconClose = document.querySelector('.gallery .close');
const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelector('.gallery-inner img');

let currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

    // show image
    galleryImage.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showGallery();
    })
});

// click icon close
iconClose.addEventListener('click', () => {
    gallery.classList.remove('show');
});

// click 'Esc'
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        gallery.classList.remove('show');
    }
})

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
})