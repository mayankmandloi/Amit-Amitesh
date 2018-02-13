var app= angular.module("myApp",["ngAnimate"]);
app.controller("myController",function($scope,$animate)
{
    $scope.onAddSquareClick = function (addAsSibling)
    {
      var box1Parent = document.querySelector("#box1Parent");

      if (box1Parent !== null)
      {
        box1Parent = angular.element(box1Parent);

        var box1 = angular.element("<div id=\"box1\" class=\"inner-box animated-element\"></div>");

        if (addAsSibling)
        {
          box1.css({position: "relative"});
        }
        else
        {
          box1.css({position: "absolute"});
        }

        $scope.enterAnimationStateBox1 = "In progress...";

        $animate.enter(box1,
          (addAsSibling ? null : box1Parent),
          (addAsSibling ? box1Parent : null)).then(function ()
        {          
            $scope.enterAnimationStateBox1 = "ENDED";          
        });
      }
    };

    $scope.onRemoveSquareClick = function ()
    {
      var box1 = document.querySelector("#box1");

      if (box1 !== null)
      {
        box1 = angular.element(box1);

        $scope.leaveAnimationStateBox1 = "In progress...";

        $animate.leave(box1).then(function ()
        {
          $scope.leaveAnimationStateBox1 = "ENDED";
        });
      }
      else
      {
        window.alert("Sorry No Box")
      }
    };
}
)