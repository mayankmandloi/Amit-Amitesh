angular.module("TripPlanner",["ngRoute"]);
angular.module("TripPlanner").config(function($routeProvider){

    $routeProvider.when("/",{
        templateUrl:"templates/main.html",
        controller:function($scope,tripmanager)
        {
            $scope.Trips=tripmanager.Trips;
        }
    })
    $routeProvider.when("/addtask",{
        templateUrl:"templates/newTask.html",
        controller:function($scope,tripmanager,$location)
        {
            $scope.saveTrip=function()
            {
                var trip = [];
                trip.from=$scope.from;
                trip.to=$scope.to;
                trip.date=$scope.date;
                trip.done=false;
                tripmanager.Trips.push(trip);
                $location.url("/");
            }
        }
    })
    $routeProvider.when("/edittask",{
        templateUrl:"templates/taskEdit.html"
    })
});
angular.module("TripPlanner").service("tripmanager",function(){
    this.Trips=[];
    // =[{from:"Indore",to:"Gwalior",date:"12/01/2018",done:false},{from:"Indore",to:"Bh0pal",date:"03/02/2018",done:false},{from:"Indore",to:"Khandwa",date:"8/01/2018",done:false}];
});