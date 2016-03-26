var mymodel = angular.module("appmodel", []);
mymodel.controller('appCtrl', ['$scope', function($scope){
	$scope.user = {
		email: "133333333@163.com",
		password: "124323",
		autoLogin: true
	};

	$scope.setForm = function () {
		$scope.user = {
			email: "43534@163.com",
			password: "124444323",
			autoLogin: false
		}
	};

	$scope.reSetForm = function () {
		$scope.user = {
		email: "133333333@163.com",
		password: "124323",
		autoLogin: true
	}
	};

}]);