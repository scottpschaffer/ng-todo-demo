app.controller("ItemNewCtrl", function($scope, $http, $location){
  $scope.NewTask={
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: ""
  };

  $scope.addNewItem = function(){
    $http.post("https://todo-appz2-scott.firebaseio.com/items.json",
    JSON.stringify({
      assignedTo: $scope.NewTask.assignedTo,
      dependencies: $scope.NewTask.dependencies,
      dueDate: $scope.NewTask.dueDate,
      isCompleted: $scope.NewTask.isCompleted,
      location: $scope.NewTask.location,
      task: $scope.NewTask.task,
      urgency: $scope.NewTask.urgency
    })
  ).success(function(response){
    console.log(response);
    $location.url("/items/list"); // Change location to a different URL if success
  })
    // $scope.NewTask.isCompleted = false;
    // $scope.NewTask.id = $scope.items.length;
    // console.log("You added a new Item", $scope.NewTask);
    // $scope.items.push($scope.NewTask);
    // $scope.NewTask="";
  };
});