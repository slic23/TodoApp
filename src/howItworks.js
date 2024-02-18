const todoApp = function(title, description, dueDate, priority ) {
    const app = {
        projects: [],
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
        
        setProject: function(){
            this.projects.push({
               name:this.projectName,
               todo: [this.title,this.Description,this.DueDate,this.Priority]
            })

            return this.projects
        } , 

        deleteProject: function(nameProj){
            for(let i = 0 ; i < this.projects.length ; i++){
               if  (this.projects[i].name  == nameProj ){
                    this.projects.splice(i,1)
                    break
               }
            }
            return this.projects
         
        }



        
    };
    
    return app;
};
