(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
	$scope.name = "Lyzeth";
  $scope.stateOfBeing = "normal";

	$scope.sayMessage = function () {
		return "She likes to edit everything!";
	};

  $scope.look = function () {
    $scope.stateOfBeing = "formal";
  };
};

})();
