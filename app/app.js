var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"},{name: "All Items"}, {name: "New Item"}];
});

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "Hello";
  $scope.showListView = true;

  $scope.newItem = function(){
    console.log("you clicked new Item");
    $scope.showListView = true;
  };
  $scope.allItem = function(){
    console.log("You clicked All Items");
    $scope.showListView = false;

  };
});