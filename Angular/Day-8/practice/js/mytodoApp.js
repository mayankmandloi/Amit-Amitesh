var app = angular.module("myTripPlanerApp",["ngRoute"]);
app.config(function($routeProvider)
{
    $routeProvider.when("/",{
      templateUrl:"templates/home.html",
      controller:function($scope,tripmanager,$route)
      {
        $scope.Trips = tripmanager.Trips;  
        $scope.DoneTrips = tripmanager.DoneTrips;
            
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
    $routeProvider.when("/addTrip",{
      templateUrl:"templates/new-trip.html",
      controller:function($scope,tripmanager,$location){
          $scope.saveTrip = function(){
          var trip = [];
          $scope.trip.id = tripmanager.obj.id++;
          $scope.trip.done = false;
          tripmanager.Trips.push($scope.trip);
          $location.url("/");
          }
      }
    })
    $routeProvider.when("/editTrip/:id",{
        templateUrl:"templates/edit-trip.html",
        controller:"editTrip"
    })      

});
app.service("tripmanager",function(){
    this.Trips = [];
    this.obj = [];
    this.obj.id = 0;
    this.DoneTrips=[];

    //this.Trips =[{id:1,from:"Indore",to:"Sagar",date:new Date(),done:false}];
});
app.controller("editTrip",function($scope,tripmanager,$routeParams){
    $scope.tt = [];
    $scope.tt.id = $routeParams.id;
    $scope.Trips=tripmanager.Trips;
});