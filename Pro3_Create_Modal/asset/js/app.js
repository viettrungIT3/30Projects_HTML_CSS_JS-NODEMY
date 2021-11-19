const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const iconClose = document.querySelector('.modal__header-icon');
const btnClose = document.querySelector('.modal__footer--btn');

function toggleModal() {
    modal.classList.toggle('hide');
}

openModal.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);

modal.addEventListener('click', (e) => {
    if ( e.target == e.currentTarget ) {
        toggleModal();
    }
});