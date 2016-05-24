app.controller("ItemNewCtrl", function($scope){
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
      task: "grade quizzes zoe",
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
  ];

  $scope.addNewItem = function(){
    $scope.NewTask.isCompleted = false;
    $scope.NewTask.id = $scope.items.length;
    console.log("You added a new Item", $scope.NewTask);
    $scope.items.push($scope.NewTask);
    $scope.NewTask="";
  };
});