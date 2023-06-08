document.getElementById('form-Task').addEventListener('submit', saveTask);

// guardar la tarea
// formfloating es la materia, solo que ne bootstrap venia con ese id y me dio miedo quitarselo pipipip
function saveTask() {

    let title = document.getElementById('title').value;
    let formfloating = document.getElementById('formfloating').value;


    let task = {
        title,
        formfloating
    };

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks();



}


// Mostrar las tareas
function getTasks() {

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let formfloating = tasks[i].formfloating;

        tasksView.innerHTML +=
            `<div class="card mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-2">
                    <label>
                        <input type='checkbox'>
                    </label>
                    </div>
                    <div class="col-sm-3 text-left"> 
                        <p>${title}</p>
                    </div>

                    <div class="col-sm-4 text-left">
                        <p>${formfloating}</p>
                    </div>

                    <div class="col-sm-2 text-right">
                        <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Quitar tarea</a>
                    </div> 
                </div>
            </div>
        </div>`;
    }

}
// por fin me ssalio que se viera la materia
getTasks();

// eliminar tarea
function deleteTask(title) {

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}


