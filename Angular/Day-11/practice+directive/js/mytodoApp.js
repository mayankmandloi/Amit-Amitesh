var app = angular.module("myTripPlanerApp",["ngRoute"]);
app.config(function($routeProvider)
{
    $routeProvider.when("/",{
      templateUrl:"templates/home.html",
      controller:function($scope,tripmanager,$route)
      {
        $scope.Trips = tripmanager.Trips;  
        $scope.DoneTrips = tripmanager.DoneTrips;
        
        $scope.sortByMe = function(value)
        {
            
            if($scope.me==value)
            {
                $scope.me= "-"+value;
            }
            else
            {
                $scope.me= value;
            }
        }


        $scope.sortByMeDone = function(value)
        {
            
            if($scope.mee==value)
            {
                $scope.mee= "-"+value;
                
            }
            else
            {
                $scope.mee= value;                
            }
            //$scope.mee =  value;          
        }
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
        $scope.deleteTrip=function(trip)
        {
            var index= $scope.DoneTrips.indexOf(trip);
            $scope.DoneTrips.splice(index,1);
        }

        $scope.deleteAll = function()
        {
            var newArr=[];
            for(i=0;i<$scope.DoneTrips.length;i++)
            {
                if(!($scope.DoneTrips[i].ischecked))
                {
                    newArr.push($scope.DoneTrips[i]);
                }
            }
            $scope.DoneTrips=newArr;
        }
        $scope.sortTrips = function(trip){
             var sortDoneTrips =  $scope.DoneTrips.sort();
            console.log(sortDoneTrips);
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

    this.DoneTrips =[{id:1,from:"Indore",to:"Sagar",date:new Date(),done:false},{id:1,from:"Indore",to:"Mars",date:new Date(),done:false},{id:1,from:"Indore",to:"Moon",date:new Date(),done:false},{id:1,from:"Indore",to:"Bhopal",date:new Date(),done:false}];
});
app.controller("editTrip",function($scope,tripmanager,$routeParams){
    $scope.tt = [];
    $scope.tt.id = $routeParams.id;
    $scope.Trips=tripmanager.Trips;
});