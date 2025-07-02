const form = document.querySelector('#form');
const formFile = document.querySelector('#file')
const progressBar = document.getElementById('progress');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.send(formData);
    xhr.upload.loadstart = () => {
        progressBar.value = 0
    }
    xhr.upload.onprogress = (e) => {
        progressBar.value = e.loaded / e.total
    }
    xhr.onloadend = () => {
        if (xhr.status == 200) {
            console.log('YEEEEES')
        } else if (xhr.status == 404){
            
        }
    }
})
