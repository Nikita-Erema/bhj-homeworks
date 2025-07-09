const closePopup = document.querySelector('.modal__close');
const modal = document.getElementById('subscribe-modal');
modal.classList.toggle('modal_active', !localStorage.modalPopup);
closePopup.addEventListener('click', () => {
    localStorage.modalPopup = true;
    modal.classList.remove('modal_active');
})