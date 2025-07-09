const textArea = document.getElementById('editor');
textArea.value = localStorage.getItem('textArea');
textArea.addEventListener('keyup', () => {
    localStorage.textArea = textArea.value
});