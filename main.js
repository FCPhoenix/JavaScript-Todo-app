const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex text-light justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
            list.innerHTML += html;
}
    
addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim(); //trim the spaces before and after

    if(todo.length){
        generateTemplate(todo);

        addForm.reset();
    }
    
});

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }


})

const filterTodos = (term) => {
    Array.from(list.children)

    .filter((todo) => !todo.textContent.includes(term)) //todos which doesn't contain the term

    .forEach((todo) => todo.classList.add('filtered'));

    //todos wich match

    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term)) //todos which contain the term
    .forEach((todo) => todo.classList.remove('filtered'));
}

//search todos
search.addEventListener('keyup', () => {

    const term = search.value.trim();
    
    filterTodos(term);
});