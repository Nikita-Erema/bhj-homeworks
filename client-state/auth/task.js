const loginForm = document.forms.signin__form;
const formSign = document.querySelector('#signin');
const button = document.querySelector('#signin__btn');
const signinTrue = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
function welcome() {
    formSign.classList.toggle('signin_active');
    signinTrue.classList.add('welcome_active');
    userId.textContent = localStorage.id;
}
console.log(localStorage.id)
if (localStorage.id) {
    welcome();
}
loginForm.addEventListener('submit', auth);
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
            localStorage.id = serverAnswer.user_id;
            welcome();
        } else {
            loginForm.reset();
            console.error("неверный логин или пароль");
        }
    }
}