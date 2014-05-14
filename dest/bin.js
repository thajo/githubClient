var app = angular.module('application', [])

.factory('testFactory', function(){
    var factory = {};

    factory.getTest = function() {
		return "This is a test";
    };
    return factory;
})
 
.controller('MainCtrl', function($scope, testFactory) {
    $scope.text = 'Hello Wrld!';
    $scope.users = UserFactory.get();
});