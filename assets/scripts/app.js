const addTodoModal = document.getElementById('add-modal');
const startAddTodo = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddTodo = addTodoModal.querySelector('.btn--passive')
const addTodoBtn = addTodoModal.querySelector('.btn--success')
const userInputs = addTodoModal.querySelectorAll('input')
const todos = [];
const entryTextSection = document.getElementById('entry-text');

const updateUI = () => {
    if (todos.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const renderNewTodo = (title, priority, date) => {
    const newTodoElement = document.createElement('li');
    let priorityColor = '';

    if (priority === '1') {
        priorityColor = 'red';
    } else if (priority === '2') {
        priorityColor = '#ff3300';
    } else if (priority === '3') {
        priorityColor = '#ff9933';
    } else if (priority === '4') {
        priorityColor = '#33cc33';
    } else if (priority === '5') {
        priorityColor = '#009933';
    }

    newTodoElement.className = 'movie-element';
    newTodoElement.innerHTML = `
    <div class = "movie-element_info">
        <h2>Activity: ${title}</h2>
        <h2>Date: ${date}</h2>
        <p style ="background: ${priorityColor};">Priority: ${priority}</p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newTodoElement);
}

const toggleTodoModal = () => {
    addTodoModal.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    toggleTodoModal();
};

const cancelAdd = () => {
    toggleTodoModal();
    clearTodoInput();
};

const clearTodoInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const addTodoHandler = () => {
    const titleValue = userInputs[0].value;
    const priorityValue = userInputs[1].value;
    const dateValue = new Date(userInputs[2].value);

    if (titleValue.trim() === '' || priorityValue < 1 || priorityValue > 5 || priorityValue.trim() === '' || dateValue === null) {
        alert('Please fill all fields with valid values');
        return;
    }

    if (dateValue < Date.now()) {
        alert('Enter a valid date.');
    }

    const newTodo = {
        title: titleValue,
        priority: priorityValue,
        date: dateValue
    };

    todos.push(newTodo);
    console.log(todos)
    clearTodoInput();
    renderNewTodo(newTodo.title, newTodo.priority, newTodo.date);
    updateUI();
    toggleTodoModal();
};

startAddTodo.addEventListener('click', toggleTodoModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddTodo.addEventListener('click', cancelAdd);
addTodoBtn.addEventListener('click', addTodoHandler);