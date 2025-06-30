const form = document.querySelector('#form');
const formFile = document.querySelector('#file')
console.log(form);
form.addEventListener('submit', (e) => {
    const formData = new FormData(form)
    console.log(Object.fromEntries(formData))
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.upload.onload = () => {
        if(xhr.status === 200) {
            console.log('файл загружен');
        } else {
            console.log(formData)
            console.log('ошибка');
        }
    }
    xhr.send(formData);
})
