
'use strict';

  /* attach directive into angular directives module */
angular.module('httpIntercept.directives').directive('toggleError',[
  function() {
    return {
      restrict: 'E',
      scope: {errorField: '=', errorMessage: '='},
      controller: function($scope, $element,$rootScope){
        $scope.reloadHome = function(e){
          e.preventDefault();

          $rootScope.errorField = false;
        };
        $scope.closeMess = function(){
          $rootScope.errorField = false;
        };
      },
      template: '<div class="alert alert-danger errAnimate" ng-show="errorField" style="margin-top:15px">' +
                  '<button type="button" class="close" data-dismiss="alert" ng-click="closeMess()">×</button>' +
                  '<h4 class="alert-heading">The system encountered error(s)!</h4>' +
                  '<p><i>{{ errorMessage }}</i></p>'+
                  '<p>Please click <a href="#" ng-click="reloadHome($event)">here</a> to go home.</p>'+
                '</div>',
      replace: true

    };
  }]);

