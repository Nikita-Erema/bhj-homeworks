const textArea = document.getElementById('editor');
if (localStorage.textArea) {
    textArea.value = localStorage.textArea
}
textArea.addEventListener('keyup', () => {
    console.log(textArea.value)
    localStorage.textArea = textArea.value;
})