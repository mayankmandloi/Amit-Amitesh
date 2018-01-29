angular.module("bookApp").controller("bookListController",["$http","$scope",function($http,$scope){
    $http.get("http://it-ebooks-api.info/v1/search/php").then(function(resData){
        $scope.Books=resData.data.Books;
    })
}])