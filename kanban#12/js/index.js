const filter = document.getElementById('search');
const cards = document.querySelectorAll('.card');
const chboxFilter = document.getElementById('checkbox-filter');
const inputTodo = document.getElementById('todo');
const inputDoing = document.getElementById('doing');
const inputDone = document.getElementById('done');
const todoWrapper = document.getElementById('todo-wrppr');
const doingWrapper = document.getElementById('doing-wrppr');
const doneWrapper = document.getElementById('done-wrppr');

filter.addEventListener('input', filterCards)

function filterCards() {
    if (filter) {
        for (let card of cards) {
            let cardTitle = card.querySelector('h2');
            cardTitle = cardTitle.textContent.toLowerCase();
            let filterText = filter.value.toLowerCase();

            if (!cardTitle.includes(filterText)) {
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
        }
    }
}

function showFilter() {
    if (chboxFilter.classList.contains('show')) {
        chboxFilter.classList.remove('show');
    } else {
        chboxFilter.classList.add('show');
    }
}

function showToDo() {
    if (inputTodo.checked) {
        doingWrapper.classList.add('show');
        doneWrapper.classList.add('show');
    } else {
        doingWrapper.classList.remove('show');
        doneWrapper.classList.remove('show');
    }
}

function showDoing() {
    if (inputDoing.checked) {
        todoWrapper.classList.add('show');
        doneWrapper.classList.add('show');
    } else {
        todoWrapper.classList.remove('show');
        doneWrapper.classList.remove('show');
    }
}

function showDone() {
    if (inputDone.checked) {
        todoWrapper.classList.add('show');
        doingWrapper.classList.add('show');
    } else {
        todoWrapper.classList.remove('show');
        doingWrapper.classList.remove('show');
    }
}

