angular.module("bookApp").directive("book",function(){

    return {

        templateUrl:"bookDirective/book.html",
        controller:function($scope){

        },
        scope:{
            book:"=showThis"
        }
    }
})