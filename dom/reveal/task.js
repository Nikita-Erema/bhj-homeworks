function check() {
    document.querySelectorAll('.reveal').forEach((e) => {
        if(e.getBoundingClientRect().top < window.innerHeight) {
            e.classList.add('reveal_active');
        }
        else {
            e.classList.remove('reveal_active');
        }
    });
}
console.log(window.innerHeight)
setInterval(check,1000);