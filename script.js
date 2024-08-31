document.getElementById('sign-in-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action
    var signInForm = document.getElementById('sign-in-form');
    if (signInForm.style.display === 'none' || signInForm.style.display === '') {
        signInForm.style.display = 'block';
    } else {
        signInForm.style.display = 'none';
    }
});

document.getElementById('add-task').addEventListener('click', function() {
    var taskValue = document.getElementById('task-input').value;
    if (taskValue) {
        var taskItem = document.createElement('li');
        taskItem.classList.add('todo');
        taskItem.innerHTML = `<input class="todo-checkbox" type="checkbox"> <span>${taskValue}</span>`;
        document.getElementById('task-list').appendChild(taskItem);
        document.getElementById('task-input').value = ''; // Clear input field

        // Add event listener to handle the checked tasks
        taskItem.querySelector('.todo-checkbox').addEventListener('change', function() {
            if (this.checked) {
                taskItem.classList.add('checked');
            } else {
                taskItem.classList.remove('checked');
            }
        });
    }
});


