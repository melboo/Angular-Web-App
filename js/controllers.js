	var portCtrl = angular.module('portCtrl', ['ngAnimate']);

	portCtrl.controller('CtrlSlide', function($scope, $rootScope, $http, $routeParams) {
	    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
	        //currRoute.animation = the one set in app route
	        $rootScope.animation = currRoute.animation;
	        // console.log($rootScope.animation);
	    });

	    $http.get('js/data.json').success(function(data) {
	        $scope.slides = data;
	        //console.log($routeParams.itemID);
	        $scope.currentIndex = $routeParams.itemID;

	        $scope.detailLink = Number($routeParams.itemID);

	        $scope.isInTransit = false;



	        $scope.filters = [   
			        {name: 'home',  filterExpr: {type: 'home'}},
			        {name: 'projects', filterExpr: {type: 'projects'}}
			    ];

			    $scope.selectedFilter = $scope.filters[0];

			    $scope.setFilter = function (filter) {
			        $scope.selectedFilter = filter;
			    };

	        $scope.isCurrentSlideIndex = function(index) {
	            // console.log(index);
	            //console.log($routeParams.itemID);
	            // return $scope.currentIndex = Number($routeParams.itemID);
	            return Number($routeParams.itemID) === index;
	        };

	        $scope.setCurrentSlideIndex = function(page) {

	            //console.log("current index is:" + index);
	            // if($scope.currentIndex !== page) {
	            // 	$scope.page = $scope.page[page];
	            // 	$scope.currentIndex = page;
	            // 	$scope.isInTransit = true;
	            	
	            // }

	        };

	    });
	});

	// portCtrl.animation('.panel-animation', function () {
	// return {
	// 	addClass: function (element, className, done) {
	// 		if (className == 'ng-hide') {
	// 			TweenMax.to(element, 0.2, { alpha: 0, onComplete: done });
	// 		}
	// 		else {
	// 			done();
	// 		}
	// 	},
	// 	removeClass: function (element, className, done) {
	// 		if (className == 'ng-hide') {
	// 			element.removeClass('ng-hide');
	// 			TweenMax.fromTo(element, 0.5, 
	// 				{ alpha: 0, left: -element.width() }, 
	// 				{ alpha: 0.8, left: 0, onComplete: done });
	// 		}
	// 		else {
	// 			done();
	// 		}
	// 	}
	// 	};
	// });

	portCtrl.controller('CtrlProject', ['$scope', '$http', '$routeParams',
	    function($scope, $http, $routeParams) {
	        $http.get('js/data.json').success(function(data) {
	            $scope.slides = data;
	            $scope.whichItem = Number($routeParams.itemID);
	            $scope.detailLink = Number($routeParams.itemID);

	            if ($routeParams.itemID > 0) {
	                $scope.prevItem = Number($routeParams.itemID) - 1;
	            } else {
	                $scope.prevItem = $scope.slides.length - 1;
	            }

	            if ($routeParams.itemID < $scope.slides.length - 1) {
	                $scope.nextItem = Number($routeParams.itemID) + 1;
	            } else {
	                $scope.nextItem = 0;
	            }

	            $scope.isMenuHover = function() {
	            	
	            }

	            $scope.isCurrentSlideIndex = function(index) {
	            // console.log(index);
	            //console.log($routeParams.itemID);
	            // return $scope.currentIndex = Number($routeParams.itemID);
	            return Number($routeParams.itemID) === index;
	        	};

	        	$scope.showAnimation = function() {
	        		// console.log('bla');
	        		return true;
	        	}

	        });
	    }
	]);

	portCtrl.controller('CtrlDetail', ['$scope', '$http', '$routeParams',
	    function($scope, $http, $routeParams) {
	        $http.get('js/data.json').success(function(data) {
	            $scope.slides = data;
	            $scope.whichItem = Number($routeParams.itemID);

	            if ($routeParams.itemID > 0) {
	                $scope.prevItem = Number($routeParams.itemID) - 1;
	            } else {
	                $scope.prevItem = $scope.slides.length - 1;
	            }

	            if ($routeParams.itemID < $scope.slides.length - 1) {
	                $scope.nextItem = Number($routeParams.itemID) + 1;
	            } else {
	                $scope.nextItem = 0;
	            }

	        });
	    }
	]);