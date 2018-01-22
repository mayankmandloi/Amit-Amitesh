(function(angular) {
  'use strict';
angular.module('docsTransclusionExample', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.name = 'Tobias';
  }])
  .directive('myDialog', function($rootScope) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'my-dialog.html',
      controller:function(){this.h="ha";},
      link: function(scope,ele,attrs,cont,trans) {
        scope.name = 'Jeff';
        //console.log(cont);
//        console.log(attrs.$$element);
          var ele=attrs.$$element;
          var ele=ele[0].childNodes[0].childNodes[1];
          setTimeout(function () {
            
            $rootScope.$apply(function(){
              trans=function(s,e,a,cont)
              {
                cont=function($scope)
                {
                  $scope.name="mayank11";
                }
              }
            });
             
          },2000)
         
          
      }
    };
  });
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/