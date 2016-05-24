app.controller("ItemListCtrl", function($scope, $http){

  $scope.items = [];

  var getItems = function(){

    $http.get("https://todo-appz2-scott.firebaseio.com/items.json")
      .success(function(itemObject){
        var itemCollection = itemObject;
        // var itemCollection = itemObject.items;
        console.log("itemObject", itemObject);
        Object.keys(itemCollection).forEach(function(key){
          itemCollection[key].id=key;
          $scope.items.push(itemCollection[key]);
        })
      });
  }
    getItems();
    $scope.itemDelete = function(itemId){
      console.log("itemId", itemId);
      $http.delete(`https://todo-appz2-scott.firebaseio.com/items/${itemId}.json`)
      .success(function(response){
        console.log("response", response);
        $scope.items = [];
        getItems();
      })
    }

});