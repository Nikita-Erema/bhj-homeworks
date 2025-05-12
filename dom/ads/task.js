function changeAds() {
    if(document.querySelector('.rotator__case_active').nextElementSibling === null) {
        document.querySelector('.rotator__case').parentElement.firstElementChild.classList.add('rotator__case_active');
        document.querySelector('.rotator__case').parentElement.lastElementChild.classList.remove('rotator__case_active');
    }
    else {
        document.querySelector('.rotator__case_active').nextElementSibling.classList.add('rotator__case_active');
        document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
    }
}
setInterval(changeAds,1000);