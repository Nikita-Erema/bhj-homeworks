const input = document.getElementById('task__input')
input.addEventListener('keydown', todo);
function todo(e) {
    if (e.key == 'Enter') {
        if (document.querySelector('.task')) {
            document.getElementById('tasks__list').lastElementChild.insertAdjacentHTML('afterend', `<div class='task'><div class="task__title"> ${input.value}</div><a href="#" class="task__remove">&times;</a></div>`)
        } else {
            document.querySelector('#tasks__list').innerHTML = `<div class='task'><div class="task__title"> ${input.value}</div><a href="#" class="task__remove">&times;</a></div>`
        }
        document.querySelectorAll('.task__remove').forEach((e) => {
            e.addEventListener('click', (e) => {
                e.target.parentElement.remove();
            })
        })
        input.value = ''
        e.preventDefault();
    }
}