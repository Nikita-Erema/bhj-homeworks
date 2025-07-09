const closePopup = document.querySelector('.modal__close');
const modal = document.getElementById('subscribe-modal');
if (!cookie('modal')) {
    modal.classList.add('modal_active');
}
closePopup.addEventListener('click', () => {
    document.cookie = 'modal=true';
    modal.classList.remove('modal_active');
})
function cookie(name) {
    return document.cookie.slice(name.length + 1);
}