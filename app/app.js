var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"},{name: "All Items"}, {name: "New Item"}];
});

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "Hello";
  $scope.showListView = true;
  $scope.NewTask={};


  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "Greg",
      location: "Zoe's house",
      urgency: "low",
      dependencies: ["sunshine, clippers, hat, water, headphones"]
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      dueDate: "12/12/17",
      assignedTo: "Joe",
      location: "NSS",
      urgency: "high",
      dependencies: ["wifi, tissues, vodka"]
    },
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      dueDate: "12/5/17",
      assignedTo: "Zoe",
      location: "Zoe's house",
      urgency: "low",
      dependencies: ["sunshine, clippers, hat, water, headphones"]
    }
  ]

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
  }
});