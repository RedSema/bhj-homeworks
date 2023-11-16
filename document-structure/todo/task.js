const addButton = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

addButton.addEventListener('click', (event) => {
    event.preventDefault();
});

input.addEventListener('keypress', (event) => {
    if (input.value && event.key === "Enter") {
        let divTask = document.createElement('div');
        divTask.className = "task";
        tasksList.append(divTask);

        let divTaskTitle = document.createElement('div');
        divTaskTitle.className = "task__title";
        divTaskTitle.innerHTML = input.value;
        divTask.append(divTaskTitle);

        let close = document.createElement('a');
        close.className = 'task__remove';
        close.innerHTML = '&times;';
        close.href = '#';

        close.addEventListener('click', (event) => {
            event.target.parentNode.remove();
        })

        divTask.append(close);

        input.value = null;
    }

})