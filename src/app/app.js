var app = angular.module('app', [])
.constant('API_URL','localhost:8080')
 
.controller('rootController', ['$scope', function($scope) {
   $scope.text = 'Hello World!';
   // $scope.users = UserFactory.get();
   $scope.githubLogin = function() {

   		// here we should request the server login

   		// Create a service Auth
   		// * login - should call ther nodeservers /auth link witch 
   		// * logout

   		this.text = "Yeah!";
   };
}])
.factory('authFactory', function() {

    /*
		This is a factory just for proxing requests 
		to the server API_URL
    */
    var auth = {};

    // load from local storage
    auth.login = function() {
        
    }

    // read the whole local storage
    auth.logout = function() {
       
    }
    return factory;
});