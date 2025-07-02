const xhr = new XMLHttpRequest;
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.upload.onload = () => {
    if (xhr.status === 200) {
        document.getElementById('poll__title').insertAdjacentText('afterend', JSON.parse(xhr.response).data.title);
        for(let i = 0; i < JSON.parse(xhr.response).data.answers.length; i++) {
            document.getElementById('poll__answers').insertAdjacentHTML('beforeend', `<button class="poll__answer">
                ${JSON.parse(xhr.response).data.answers[i]}
                </button>`)
            }
            document.querySelectorAll('.poll__answer').forEach((e) => {
                e.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!')
                })
            })
        } else if (xhr.status === 404) {
            console.error(404);
        }
    } 