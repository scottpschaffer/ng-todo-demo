app.controller("TodoCtrl", function($scope){
  $scope.welcome = "Hello";
  $scope.showListView = true;
  $scope.NewTask={};


  $scope.items = [];

  $scope.newItem = function(){
    console.log("you clicked new Item");
    $scope.showListView = true;
  };
  $scope.allItem = function(){
    console.log("You clicked All Items");
    $scope.showListView = false;
  };
  $scope.addNewItem = function(){
    $scope.NewTask.isCompleted = false;
    $scope.NewTask.id = $scope.items.length;
    console.log("You added a new Item", $scope.NewTask);
    $scope.items.push($scope.NewTask);
    $scope.NewTask="";
  };
});