const todoApp = function(title, description, dueDate, priority ) {
    const app = {
        projects: JSON.parse(localStorage.getItem('userData'))|| [],
        local : function(){
            localStorage.setItem("userData",JSON.stringify(this.projects))
            
        },
        todo: [],
        projectName: title,
        title: title,
        Description: description,
        DueDate: dueDate,
        Priority: priority,
        setTodo : function(){
            this.todo.push(this.title,this.Description,this.DueDate,this.Priority)
            return this.todo 
        },

        deleteTodo: function(todoName){
            for(let x = 0 ; x < this.projects.length ; x++){
                const project = this.projects[x];
                for(let j = 0 ; j < project.todo.length; j++){
                    const todo = project.todo[j];
                    if(todo.title === todoName){

                        project.todo.splice(j, 1);
                        
                        this.local();
                        return;
                    }
                }
            }
        },

        setProject: function(){
            this.projects.push({
               name:this.projectName,
               todo: [this.title,this.Description,this.DueDate,this.Priority]
            })

            this.local()
            return this.projects
        } , 

        deleteProject: function(nameProj){
            for(let i = 0 ; i < this.projects.length ; i++){
               if  (this.projects[i].name  == nameProj ){
                    this.projects.splice(i,1)
                    break
               }
            }
            this.local()
            return this.projects
         
        }



        
    };
    
    return app;
};
