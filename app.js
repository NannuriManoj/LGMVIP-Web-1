document.getElementById('addButton').addEventListener('click', function (e) {
    e.preventDefault();
    const value = document.getElementById('todoInput').value;
    if (value) {
        addItem(value);
        document.getElementById('todoInput').value = '';
    }
    else {
        alert("Enter something");
    }
});

function addItem(text) {
    const list = document.getElementById('todoList');

    const item = document.createElement('li');
    item.className = 'todoItem';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        item.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    const taskText = document.createElement('span');
    taskText.innerText = text;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.addEventListener('click', function () {
        list.removeChild(item);
    });

    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(deleteButton);
    list.appendChild(item);
}






