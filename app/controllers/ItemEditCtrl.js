app.controller("ItemEditCtrl", function($scope, $location, $routeParams, itemStorage){
  $scope.NewTask={};

  itemStorage.getSingleItem($routeParams.itemId)
    .then(function successCallback(response){
      console.log("response", response);
      $scope.NewTask=response;
    })

  $scope.addNewItem = function(){
    itemStorage.updateItem($routeParams.itemId, $scope.NewTask)
      .then(function successCallback(response){
        console.log(response);
        $location.url("/items/list");
      });
  }
});