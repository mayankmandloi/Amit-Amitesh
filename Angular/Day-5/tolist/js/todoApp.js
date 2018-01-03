angular.module("todoApp",[]).controller("todoController",function(){
    var self = this;
    self.taskList=[{text:"create todo app",done:false}]
    self.addTask= function()
    {
        self.taskList.push({text:self.newTask,done:false})
        self.newTask="";
    };
    self.toggleEdit=function(task)
    {
        if(task.editable)
        {
            task.editable=false;
        }
        else
        {
            task.editable=true;
        }
    }
})