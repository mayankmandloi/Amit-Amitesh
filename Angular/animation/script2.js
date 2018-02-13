var app =angular.module("myModule",["ngAnimate"]);

app.controller("myController",function($scope,$animate){

    
    $scope.onAddClassClick = function ()
    {
      var box2 = document.querySelector("#box2");

      if (box2 !== null)
      {
        box2 = angular.element(box2);

        $scope.addClassAnimationStateBox2 = "In progress...";

        $animate.addClass(box2, "custom-class").then(function ()
        {
          
            $scope.addClassAnimationStateBox2 = "ENDED";
      
        });
      }
    };

    $scope.onRemoveClassClick = function ()
    {
      var box2 = document.querySelector("#box2");

      if (box2 !== null)
      {
        box2 = angular.element(box2);

        $scope.removeClassAnimationStateBox2 = "In progress...";

        $animate.removeClass(box2, "custom-class").then(function ()
        {
          // NOTE: I must use $scope.$apply() inside this callback
          $scope.$apply(function ()
          {
            $scope.removeClassAnimationStateBox2 = "ENDED";
          });
        });
      }
    };

    $scope.onSetClassClick = function ()
    {
      var box3 = document.querySelector("#box3");

      if (box3 !== null)
      {
        box3 = angular.element(box3);

        $scope.setClassAnimationStateBox3 = "In progress...";

        setClassFlag = !setClassFlag;

        $animate.setClass(box3,
          (setClassFlag ? "box-border" : "box-fill"),
          (setClassFlag ? "box-fill" : "box-border")).then(function ()
        {
          // NOTE: I must use $scope.$apply() inside this callback
          $scope.$apply(function ()
          {
            $scope.setClassAnimationStateBox3 = "ENDED";
          });
        });
      }
    };

})