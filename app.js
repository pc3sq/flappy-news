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
		//if scope is nil or an empty string, escape by returning out of this function
		if(!$scope.title || $scope.title === '') { return; }
	  $scope.posts.push({
	  	title: $scope.title, 
	  	link: $scope.link,
	  	upvotes: 0
	  });
	  //clear the title field after the new post is pushed
	  $scope.title = '';
	  $scope.link = '';
	};
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);
