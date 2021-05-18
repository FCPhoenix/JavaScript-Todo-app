const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');


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