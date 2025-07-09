const loginForm = document.forms.signin__form;
const button = document.querySelector('#signin__btn');
const signinTrue = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
button.addEventListener('click', () => {
    const form = new FormData(loginForm)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
    xhr.send(form)
    xhr.onload = () => {
        if ( 200 >= xhr.status < 300) {
            const serverAnswer = JSON.parse(xhr.response)
            if(serverAnswer.success) {
                signinTrue.classList.add('welcome_active');
                userId.textContent = serverAnswer.user_id;
            } else {
                console.error("неверный логин или пароль");
            }
        } else {
            console.error(xhr.status)
        }
    }
})