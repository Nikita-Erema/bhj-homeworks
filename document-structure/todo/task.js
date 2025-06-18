const input = document.getElementById('task__input')
document.querySelector('form').addEventListener('submit', todo);
function todo(e) {
        if(input.value.trim() !== '') {
            document.getElementById('tasks__list').insertAdjacentHTML('beforeEnd', `<div class='task'><div class="task__title"> ${input.value}</div><a href="#" class="task__remove">&times;</a></div>`)
            document.querySelectorAll('.task__remove').forEach((e) => {
                e.addEventListener('click', (e) => {
                    e.target.parentElement.remove();
                })
            })
        }
        input.value = ''
        e.preventDefault();
}
