app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory){

  let ref = new Firebase(firebaseURL)
  console.log("ref", ref);

  // $scope.register = function(){
  //   console.log("you clicked register");
  // };

  $scope.hasUser = false;

  $scope.account = {
    email: "",
    password: ""
  };

  if($location.path() === "/logout"){
    ref.unauth(); //killing auth token
  }

  $scope.register = () => {
    console.log("you clicked register");
    ref.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    }, (error, userData) => {
      if(error){
        console.log(`Error creating user: ${error}`)
      } else {
        console.log(`Created user account with uid: ${userData.uid}`)
        $scope.login();
      }
    });
  };



  $scope.login = () => {
    console.log("you clicked Login");
    AuthFactory
      .authenticate($scope.account)
      .then(() => {
        // $scope.hasUser = true;
        $location.path("/")
        $scope.$apply();
      })
  };

});