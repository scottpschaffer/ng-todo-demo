app.controller("ItemViewCtrl", function($scope, $http, $routeParams){
  $scope.items=[];
  $scope.selectedItem = {};
  console.log($routeParams.itemId);
      
  $http.get("https://todo-appz2-scott.firebaseio.com/items.json")
    .success(function(itemObject){
      var itemCollection = itemObject;
      // var itemCollection = itemObject.items;
      console.log("itemObject", itemObject);
        Object.keys(itemCollection).forEach(function(key){
          itemCollection[key].id=key;
          $scope.items.push(itemCollection[key]);

          $scope.selectedItem = $scope.items.filter(function(item){
            return item.id === $routeParams.itemId;
          })[0];


        })
  });
});