angular.module("TripPlanner",["ngRoute"]);
angular.module("TripPlanner").config(function($routeProvider){

    $routeProvider.when("/",{
        templateUrl:"templates/main.html",
        controller:function($scope,tripmanager,$route)
        {
            $scope.Trips=tripmanager.Trips;
            $scope.DoneTrips=tripmanager.DoneTrips;
            $scope.tripDone = function(trip)
            {
                trip.done=false;
                $scope.DoneTrips.push(trip);
                var i=$scope.Trips.indexOf(trip);
                $scope.Trips.splice(i,1);
                $scope.Trips=tripmanager.Trips;
                $scope.DoneTrips=tripmanager.DoneTrips;
                $route.reload();
            }
        }
    })
    $routeProvider.when("/addtask",{
        templateUrl:"templates/newTask.html",
        controller:function($scope,tripmanager,$location)
        {
            $scope.saveTrip=function()
            {
             
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
    this.obj.id=1;
    this.DoneTrips=[];

    this.Trips =[{id:1,from:"Indore",to:"Gwalior",date:new Date(),done:false},{id:2,from:"Indore",to:"Bhopal",date:new Date(),done:false},{id:3,from:"Indore",to:"Khandwa",date:new Date(),done:false}];
});
angular.module("TripPlanner").controller("editTrip",function($scope,$routeParams,tripmanager){
    $scope.tt=[];
$scope.tt.id=$routeParams.id;
$scope.Trips=tripmanager.Trips;
console.log($scope.Trips);
})