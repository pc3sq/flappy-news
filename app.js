angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function ($scope) {
  $scope.test = 'Hello world!';
	$scope.posts = [  {title: 'title 1', upvotes: 5},
									  {title: 'title 2', upvotes: 2},
									  {title: 'title 3', upvotes: 15},
									  {title: 'title 4', upvotes: 9},
									  {title: 'title 5', upvotes: 4}		];
	$scope.addPost = function(){
	  $scope.posts.push({title: 'A new post!', upvotes: 0});
	};
}]);
