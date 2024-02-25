const experimento = function(){
    const expo = {
        projects: JSON.parse(localStorage.getItem('meta')) || [],

        local: function(){
            localStorage.setItem('meta', JSON.stringify(this.projects));
        },

        newProject: function(name){
            const nuevoProj = {
                projectName: name, 
                todos: []
            };

            this.projects.push(nuevoProj);
            this.local();
        },

        deleteTask: function(name, title) {
            
                this.projects.forEach(project => {
                if (project.projectName === name) {
                    project.todos = project.todos.filter(task => task.title !== title);
                }
            });
            this.local(); // Guardar los cambios en el almacenamiento local
        },
        
        setTodo: function(name, title, description, priority, date){
            const obj = this.projects.find(project => project.projectName === name);
            const todo = {
                title: title,
                description: description,
                priority: priority,
                date: date
            };
            obj.todos.push(todo);
            this.local();
        },

        deleteProject: function(nameProj){
            if (nameProj === "Project Default") {
                return this.projects;
            }
            this.projects = this.projects.filter(proj => proj.projectName !== nameProj);
            this.local();
            return this.projects;
        } 
    };
    
    // Agregar el proyecto predeterminado si no hay proyectos almacenados
    if (expo.projects.length === 0) {
        expo.newProject("Project Default");
    }
    
    return expo;
};


export {
    experimento
}