const todoApp = function(title, description, dueDate, priority) {
    const app = {
        projects: [],
        todo: [],
        title: title,
        Description: description,
        DueDate: dueDate,
        Priority: priority,
        setTodo : function(){
            this.todo.push(this.title,this.Description,this.DueDate,this.Priority)
            return this.todo 
        },
        
        setProject: function(name){
            this.projects.push({
               name:name,
               todo: [/*this.title,this.Description,this.DueDate,this.Priority*/]// se debe crear el nombre del proyecto antes del todo 
            })

            return this.projects
        }



        
    };
    
    return app;
};
