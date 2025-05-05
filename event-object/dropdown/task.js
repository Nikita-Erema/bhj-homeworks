let list = document.querySelectorAll('.dropdown__item');
console.log(list);
document.querySelector('.dropdown__value').addEventListener('click', Click);
function Click() {
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active');
}
function change() {
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    document.querySelector('.dropdown__value').textContent = this.textContent;
}
list.forEach((element) => {
    element.addEventListener('click', change);
})