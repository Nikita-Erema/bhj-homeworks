const closePopup = document.querySelector('.modal__close');
const modal = document.getElementById('subscribe-modal');
if (!localStorage.modalPopup) {
    modal.classList.add('modal_active')
}
closePopup.addEventListener('click', () => {
    localStorage.modalPopup = true;
    modal.classList.remove('modal_active');
})