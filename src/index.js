import { modals } from "./modals.js";

import { experimento } from "./howItworks.js";

function mando(radios){
    for(let x = 0; x < radios.length; x++){
        if(radios[x].checked == true){
            return radios[x].value;
        }
    }
}

modals();

let VIDA = experimento();

document.addEventListener('DOMContentLoaded', () => {
    const proyectos = JSON.parse(localStorage.getItem('meta')) || [];
    proyectos.forEach(project => {
        let option = document.createElement('option');
        option.value = project.projectName;
        option.textContent = project.projectName;
        document.getElementById('projects').appendChild(option);
    });

    // Mostrar las tareas del proyecto seleccionado al cargar la página
    let selectedProjectName = document.querySelector('select').value;
    mostrarTareas(selectedProjectName);
});

document.getElementById('project').addEventListener('click', () => {
    let projectName = document.getElementById('texto').value;

    if(projectName == ""){
        alert("rellena mensaje");
    } else {
        VIDA.newProject(projectName);

        document.getElementById('projects').innerHTML = '';
        const proyectos = JSON.parse(localStorage.getItem('meta')) || [];
        proyectos.forEach(project => {
            let option = document.createElement('option');
            option.value = project.projectName;
            option.textContent = project.projectName;
            document.getElementById('projects').appendChild(option);
        });
    }
});

document.getElementById('eliminar').addEventListener('click', () => {
    const select = document.querySelector('select').value;
    VIDA.deleteProject(select);

    document.getElementById('projects').innerHTML = '';
    const proyectos = JSON.parse(localStorage.getItem('meta'))|| [];
    proyectos.forEach(project => {
        let option = document.createElement('option');
        option.value = project.projectName;
        option.textContent = project.projectName;
        document.getElementById('projects').appendChild(option);
    });
});

document.querySelector('.saving').addEventListener('click', () => {
    let projectName = document.querySelector('select').value;
    let title = document.getElementById('titulo').value;
    let description = document.getElementById('tex').value;
    let priority = mando(document.querySelectorAll('#radio'));
    let date = document.getElementById('date').value;

    if (title === "") {
        alert("Por favor, ingresa un título para la tarea");
    } else if (description === "") {
        alert("Por favor, ingresa una descripción para la tarea");
    } else if (priority === "") {
        alert("Por favor, selecciona una prioridad para la tarea");
    } else if (date === "") {
        alert("Por favor, selecciona una fecha para la tarea");
    } else {
        VIDA.setTodo(projectName, title, description, priority, date);
        mostrarTareas(projectName);
    }
});

document.querySelector('select').addEventListener('change', (event) => {
    event.preventDefault();
    const selectedProjectName = document.querySelector('select').value;
    mostrarTareas(selectedProjectName);
});

function mostrarTareas(selectedProjectName) {
    const proyectos = JSON.parse(localStorage.getItem('meta')) || [];
    const selectedProject = proyectos.find(project => project.projectName === selectedProjectName);

    document.getElementById('tareas').innerHTML = '';

    if (selectedProject && selectedProject.todos.length > 0) {
        selectedProject.todos.forEach(task => {
            let taskElement = document.createElement('div');
            document.getElementById('tareas').appendChild(taskElement);
            taskElement.setAttribute('class',"atributes")

            let title = document.createElement('div');
            title.textContent = task.title;
            taskElement.appendChild(title);

            let description = document.createElement('div');
            description.textContent = task.description;
            taskElement.appendChild(description);

            let priority = document.createElement('div');
            priority.textContent = task.priority;
            taskElement.appendChild(priority);

            let date = document.createElement('div');
            date.textContent = task.date;
            taskElement.appendChild(date);

            let button = document.createElement('button');
            button.textContent = "Delete Task";
            button.setAttribute('class', "DeleteMe");
            taskElement.appendChild(button);

            button.addEventListener('click', function (event) {
                let parent = event.target.parentElement;
                let proj = document.querySelector('select').value;
                let titulo = parent.firstChild.textContent;
                VIDA.deleteTask(proj, titulo);
                parent.remove();
            });
        });
    }
}
