const links = [...document.querySelectorAll('.has-tooltip')];
let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
function tooltipAdd(event) {
    if (event.target.getAttribute('data') === event.target.title) {
        tooltip.classList.toggle('tooltip_active');
        event.target.setAttribute('data', null);
    } else {
        const cord = event.target.getBoundingClientRect()
        event.target.setAttribute('data', event.target.title);
        tooltip.classList.add('tooltip_active');
        tooltip.innerText = event.target.title;
        tooltip.style.left = cord.left + 'px'
        tooltip.style.top = cord.top + cord.height + 'px'
        event.target.insertAdjacentElement('afterEnd', tooltip);
        console.log(event.target.getBoundingClientRect())
    }
}
links.forEach((e) => {
    e.addEventListener('click', tooltipAdd);
    e.setAttribute('data', null);
});
