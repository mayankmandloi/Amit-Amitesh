angular.module("todoApp",[]).controller("todoController",function(){
    var self = this;

    self.sortBy=function(t)
    {
        self.canI =!self.canI;
        console.log(self.canI)
    };
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
});

angular.module("todoApp").filter("ff",function(){
    return function(item,canI)
    {
        var incTask=[];
        var cmpTask=[];
       for(index=0;index<item.length;index++)
       {
          // console.log(index);
           if(item[index].done)
           {
               cmpTask.push(item[index]);
           }
           else
           {
               incTask.push(item[index]);
           }
           
           //console.log(t);
        }
        if(canI)
        {
        incTask=incTask.sort(function(a,b)
        {
            //console.log(a.text.localeCompare(b.text));
            return a.text.localeCompare(b.text);
        });
    }
       // console.log(incTask);
        var t=incTask.concat(cmpTask);
        return t;         

    }
})