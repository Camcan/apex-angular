var apex = angular.module('apex', ['ngRoute', 'ngAnimate'])

apex.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'homeController'
		})

		.when('/art', {
			templateUrl : 'pages/art.html',
			controller  : 'artController'
		})

		.when('/view', {
			templateUrl : 'pages/portfolio.html',
			controller : 'artController'
		})

		.when('/view/item', {
			templateUrl : 'pages/item.html',
			controller : 'artController'
		})
		
		.when('/apparel', {
				templateUrl : 'pages/apparel.html',
				controller  : 'apparelController'
		})

		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'mainController'
		})
})