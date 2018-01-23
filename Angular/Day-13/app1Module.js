angular.module("app1Module",[]);

angular.module("app1Module").directive("demo",function(){
    return{
    template:"<h1>I am from app1Module</h1>"
    };
})