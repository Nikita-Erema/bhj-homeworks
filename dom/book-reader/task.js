function change(e) {
    if(e.target.classList[1]) {
    document.getElementById('book').classList.remove(document.getElementById('book').classList[1])
    document.getElementById('book').classList.add(e.target.classList[1])
    } else {
        document.getElementById('book').classList.remove(document.getElementById('book').classList[1])    
    }
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    e.target.classList.add('font-size_active');
}
document.querySelectorAll('.font-size').forEach((e) => {
    e.addEventListener('click', change)
})