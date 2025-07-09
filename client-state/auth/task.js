const loginForm = document.forms.signin__form;
const formSign = document.querySelector('#signin');
const button = document.querySelector('#signin__btn');
const signinTrue = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
if (!localStorage.id) {
    loginForm.addEventListener('submit', auth);
    button.addEventListener('click', auth);
} else {
    formSign.classList.toggle('signin_active');
    signinTrue.classList.add('welcome_active');
    userId.textContent = localStorage.id;
}
function auth(e) {
    e.preventDefault();
    const form = new FormData(loginForm)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
    xhr.responseType = 'json'
    xhr.send(form)
    xhr.onload = () => {
        console.log(xhr.response)
        const serverAnswer = xhr.response
        if(serverAnswer.success) {
            signinTrue.classList.add('welcome_active');
            localStorage.id = serverAnswer.user_id;
            userId.textContent = localStorage.id;
            formSign.classList.toggle('signin_active');
        } else {
            loginForm.reset();
            console.error("неверный логин или пароль");
        }
    }
}