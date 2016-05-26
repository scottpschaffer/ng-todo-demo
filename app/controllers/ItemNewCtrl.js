app.controller("ItemNewCtrl", function($scope, $location, itemStorage){
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
    itemStorage.postNewItem($scope.NewTask)
      .then(function successCallback(response){
        console.log(response);
        $location.url("/items/list");
      });
  }
});