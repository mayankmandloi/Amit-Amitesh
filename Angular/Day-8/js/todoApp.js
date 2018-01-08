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
                $scope.trip.id=tripmanager.obj.id++;
                // trip.from=$scope.from;
                // trip.to=$scope.to;
                // trip.date=$scope.date;
                $scope.trip.done=false;
                tripmanager.Trips.push($scope.trip);
                //console.log(trip.id);
                $location.url("/");
            }
        }
    })
    $routeProvider.when("/edittask/:id",{
        templateUrl:"templates/taskEdit.html",
        controller:"editTrip"

    })
});
angular.module("TripPlanner").service("tripmanager",function(){
    this.Trips=[];
    this.obj=[];
    this.obj.id=4;

    this.Trips =[{id:1,from:"Indore",to:"Gwalior",date:new Date(),done:false},{id:2,from:"Indore",to:"Bh0pal",date:new Date(),done:false},{id:3,from:"Indore",to:"Khandwa",date:new Date(),done:false}];
});
angular.module("TripPlanner").controller("editTrip",function($scope,$routeParams,tripmanager){
    $scope.tt=[];
$scope.tt.id=$routeParams.id;
$scope.Trips=tripmanager.Trips;
console.log($scope.Trips);
})