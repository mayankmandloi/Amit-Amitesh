angular.module("mainModule", ["ngAnimate"])
  .directive("elementGlow", function ($animate)
  {
    // Initialization
    var unwatchProperty = null;

    // Definition object
    return {
      // Post-link function
      link: function (scope, element, attrs)
      {
        var watchedProperty = attrs.elementGlow;

        if (watchedProperty !== undefined &&
          watchedProperty !== "")
        {
          unwatchProperty = scope.$watch(watchedProperty,
            function (newVal, oldVal, scope)
            {
              if (newVal !== oldVal)
              {
                if (newVal)
                {
                  $animate.animate(element,
                    {
                      "box-shadow": "none"
                    },
                    {
                      "box-shadow": "0px 0px 15px 5px rgba(135, 206, 250, 0.75)"
                    },
                    "element-glow-animation"
                  );
                }
                else
                {
                  $animate.animate(element,
                    {
                      "box-shadow": "0px 0px 15px 5px rgba(135, 206, 250, 0.75)"
                    },
                    {
                      "box-shadow": "none"
                    },
                    "element-glow-animation"
                  );
                }
              }
            });

          element.one("$destroy",
            function ()
            {
              // Directive cleanup
              if (unwatchProperty !== null)
              {
                unwatchProperty();

                unwatchProperty = null;
              }
            });
        }
      }
    };
  })
  .controller("mainController", function ($scope, $animate, $q)
  {
    $scope.enterAnimationStateBox1 = "OFF";
    $scope.leaveAnimationStateBox1 = "OFF";
    $scope.moveAnimationState = "OFF";
    $scope.addClassAnimationStateBox2 = "OFF";
    $scope.removeClassAnimationStateBox2 = "OFF";
    $scope.setClassAnimationStateBox3 = "OFF";
    $scope.longAnimationStateBox4 = "OFF";
    $scope.areAnimationsEnabled = true;

    var moveSequence = 1;
    var setClassFlag = false;
    var currLongAnimationPromise = null;

    


    $scope.onStartLongAnimationClick = function ()
    {
      var box4 = document.querySelector("#box4");

      if (box4 !== null)
      {
        box4 = angular.element(box4);

        var animationStep1 = function ()
        {
          $scope.longAnimationStateBox4 = "In progress (step 1)...";

          currLongAnimationPromise = $animate.animate(box4,
            {
              opacity: 0
            },
            {
              opacity: 1
            },
            "custom-inline-animation-1",
            {
              // Add these classes to the element during the animation
              tempClasses: ["box-border"]
            }
          );

          currLongAnimationPromise.then(function ()
            {
              // NOTE: I must use $scope.$apply() inside this callback
              $scope.$apply(function ()
              {
                animationStep2();
              });
            });
        };

        var animationStep2 = function ()
        {
          $scope.longAnimationStateBox4 = "In progress (step 2)...";

          currLongAnimationPromise = $animate.animate(box4, null, null);

          currLongAnimationPromise.then(function ()
          {
            // NOTE: I must use $scope.$apply() inside this callback
            $scope.$apply(function ()
            {
              animationStep3();
            });
          });
        };

        var animationStep3 = function ()
        {
          $scope.longAnimationStateBox4 = "In progress (step 3)...";

          currLongAnimationPromise = $animate.animate(box4,
            {
              opacity: 1
            },
            {
              opacity: 0
            },
            "custom-inline-animation-2"
          );

          currLongAnimationPromise.then(function ()
          {
            // NOTE: I must use $scope.$apply() inside this callback
            $scope.$apply(function ()
            {
              currLongAnimationPromise = null;

              // Remove the inline styles set by animationStep1 and animationStep3
              box4.removeAttr("style");

              $scope.longAnimationStateBox4 = "ENDED";
            });
          });
        };

        // Start the animation
        animationStep1();
      }
    };

    $scope.onCancelLongAnimationStepClick = function ()
    {
      if (currLongAnimationPromise !== null)
      {
        $animate.cancel(currLongAnimationPromise);

        currLongAnimationPromise = null;
      }
    };

    $scope.enableDisableAnimations = function (enableAnimations)
    {
      $animate.enabled(enableAnimations);
    };
  });