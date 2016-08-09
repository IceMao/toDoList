angular = require('angular');
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.list=[
		{name:"",change:null}//当change为false时 进行时中会多出一个“多余的事件”
	]
	
	$scope.write="";

	$scope.count=0;
	$scope.counted=0;
	//回车提交事件
	$scope.enterToDo = function(ev){
		if(ev.keyCode !== 13)
			return;
		if($scope.write == "" || $scope.write.trim() == ""){
			alert("请输入内容…………");
		}else{
			$scope.list.push({change:false, name: $scope.write});
			$scope.write="";
			$scope.count++;
		}
	}
	//删除事件
	$scope.del = function(index){
		
		if($scope.list[index].change == false){
			$scope.count--;
		}else{
			$scope.counted--;
		}
		$scope.list.splice(index,1);
	}
	//check改变 已完成和进行时的数据改变
	$scope.checkFn = function(index){
		console.log($scope.list[index].change);
		//未完成事件，更改为已完成事件
		if($scope.list[index].change == false){
			$scope.list[index].change = true;
			$scope.count--;
			$scope.counted++;
		}else{//已完成事件更改为未完成事件
			$scope.list[index].change = false;
			$scope.count++;
			$scope.counted--;
		}
	}
});