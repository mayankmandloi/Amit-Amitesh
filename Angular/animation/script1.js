var app = angular.module("myModule",["ngAnimate"]);
app.controller("myController",function($scope,$animate,$q){

    moveSequence=1;
    $scope.onMoveSquaresClick = function ()
    {
      var moveLeftmostElement = document.querySelector("#moveLeftmostElement");
      var blueBox = document.querySelector("#blueBox");
      var redBox = document.querySelector("#redBox");
      var greenBox = document.querySelector("#greenBox");

      if (moveLeftmostElement !== null &&
        blueBox !== null && redBox !== null && greenBox !== null)
      {
        moveLeftmostElement = angular.element(moveLeftmostElement);
        blueBox = angular.element(blueBox);
        redBox = angular.element(redBox);
        greenBox = angular.element(greenBox);

        $scope.moveAnimationState = "In progress...";

        var promise;

        switch (moveSequence)
        {
          // From BLUE RED GREEN to GREEN BLUE RED
          case 1:
            promise = $q.all([
              $animate.move(greenBox, null, moveLeftmostElement),
              $animate.move(blueBox, null, greenBox),
              $animate.move(redBox, null, blueBox)
            ]);
            break;
          // From GREEN BLUE RED to RED GREEN BLUE
          case 2:
            promise = $q.all([
              $animate.move(redBox, null, moveLeftmostElement),
              $animate.move(greenBox, null, redBox),
              $animate.move(blueBox, null, greenBox)
            ]);
            break;
          // From RED GREEN BLUE to BLUE RED GREEN
          case 3:
            promise = $q.all([
              $animate.move(blueBox, null, moveLeftmostElement),
              $animate.move(redBox, null, blueBox),
              $animate.move(greenBox, null, redBox)
            ]);
            break;
        }

        moveSequence++;

        if (moveSequence > 3)
        {
          moveSequence = 1;
        }

        promise.then(function ()
        {
          $scope.moveAnimationState = "ENDED";
        });
      }
    };
})