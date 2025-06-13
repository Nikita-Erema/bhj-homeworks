const links = [];
document.querySelectorAll('.has-tooltip').forEach((e) => {
    links.push(e)
});
console.log(links);
links.forEach((e) => {
    e.insertAdjacentHTML('afterEnd', `<div class="tooltip">${e.title}</div>`);
    e.addEventListener('click', (e) => {
        tooltips.forEach((e) => {
            if(!(e.classList.value === 'tooltip')) {
                e.classList.remove('tooltip_active')
            }
        })
        tooltips[links.indexOf(e.target)].classList.add('tooltip_active');
        console.log(e.target);
    });
})
const tooltips = []
document.querySelectorAll('.tooltip').forEach((e) => {
    tooltips.push(e);
});