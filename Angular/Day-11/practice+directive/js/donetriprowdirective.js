angular.module("myTripPlanerApp").directive("doneRow",function(){

    return {

        templateUrl:"templates/donetriprow.html",
        controller:function()
        {

        },
        controllerAs:"cont",
        scope:{
            trip:"=",
            number:"="
        }
    }
})