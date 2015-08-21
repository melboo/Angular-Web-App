	app = angular.module('app', ['ngRoute', 'ngAnimate', 'portCtrl']);

	app.config(function($routeProvider, $locationProvider){
	  
    $routeProvider
	    .when('/first',{
	      template: "<div class='box'>First</div>",
	      animation: 'first' //class for ng-app/ng-animate
	    })
	    .when('/second',{
	      templateUrl: 'partials/slide.html',
	      animation: 'second'
	    })
	    .when('/third',{
	    	template: "<div class='box'>Third</div>",
	    	animation: 'third'
	    })
	    .when('/details/:itemID', {
		    templateUrl: 'partials/details.html',
		    animation: 'second',
		    controller: 'CtrlDetail'
		})
	    .when('/:itemID', {
	    	templateUrl: 'partials/slide.html',
	      	animation: 'second',
	      	controller: 'CtrlProject'
	    })
	    .when('/home/:itemID', {
	    	templateUrl: 'partials/slide.html',
	      	animation: 'third',
	      	controller: 'CtrlProject'
	    })
	    .when('/projects/:itemID', {
	    	templateUrl: 'partials/slide.html',
	      	animation: 'third',
	      	controller: 'CtrlProject'
	    })
	    .otherwise({
	      template: "<div class='box n'>Well... Hello There</div>",
	      animation: 'welcome'
	    });
	});
