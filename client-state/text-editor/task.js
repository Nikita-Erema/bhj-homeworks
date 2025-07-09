const textArea = document.getElementById('editor');
textArea.value = getCookie('textArea');
textArea.addEventListener('keyup', () => {
    document.cookie = `textArea=${textArea.value}`
})
function getCookie(name) {
    let value = name.length + 1;
    return document.cookie.slice(value);
}