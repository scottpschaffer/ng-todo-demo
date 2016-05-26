app.controller("ItemListCtrl", function($scope, itemStorage){
  console.log("Help");
  $scope.items = [];

  itemStorage.getItemList().then(function(itemCollection){
    console.log("itemCollection from Promise", itemCollection);
    $scope.items = itemCollection;
  })


  $scope.itemDelete = function(itemId){
    console.log("itemId", itemId);
    itemStorage.deleteItem(itemId).then(function(response){
      itemStorage.getItemList().then(function(itemCollection){
        $scope.items = itemCollection;
      })
    })
  }

});