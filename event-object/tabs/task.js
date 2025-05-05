let tabNav = [];
let tabCon = document.querySelectorAll('.tab__content');
for (let i = 0; i < document.querySelectorAll('.tab').length; i++) {
    tabNav.push(document.querySelectorAll('.tab')[i]);
}
console.log(tabCon);
tabNav.forEach((e) => {
    e.addEventListener('click', button);
});
function button() {
    tabNav.forEach((e) => {
        if(e.classList.contains('tab_active')) {
            e.classList.remove('tab_active');
        }
    })
    this.classList.add('tab_active');
    tabCon.forEach((e) => {
        if(e.classList.contains('tab__content_active')) {
            e.classList.remove('tab__content_active');
        }
    })
    tabCon[tabNav.indexOf(this)].classList.add('tab__content_active')
}
