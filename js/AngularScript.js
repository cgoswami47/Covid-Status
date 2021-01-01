let app=angular.module("MyProject",[]);
app.controller('Hello', ($scope) => {
	$scope.title="Welcome to Angular js";
	//$scope.count=0;
	/* $scope.addUser= function(){
		$scope.count++;
	} */
	$scope.arr=[];
	$scope.addUser = function(){
		$scope.arr.push($scope.name);
	}
	$scope.var1="This is a ngif example";
	$scope.myObj = {
		"color" : "red",
		"background-color": "yellow",
		"padding": "50px"
		
	}
	
});
