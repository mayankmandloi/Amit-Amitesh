angular.module("bookApp",["ngRoute"]);

angular.module("bookApp").config(function($routeProvider){



$routeProvider.when("/",{
    templateUrl:"bookList/booklist.html",
    controller:"bookListController"
});

$routeProvider.when("/edit/:isbn",{
    templateUrl:"BookEdit/bookedit.html",
    controller:"bookEditController"
})


});