angular.module("bookApp").directive("bookNew",function(){

    return {

        templateUrl:"bookDirectiveNew/bookNew.html",
        controller:function($scope){

        },
        scope:{
            book:"=showThis"
        }
    }
})