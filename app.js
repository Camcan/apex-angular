


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


apex.controller('mainController', function($scope, $location) {
	$scope.selectedSection = false
	$scope.selectedItem = false
	$scope.onDesktop = window.matchMedia("(min-width: 650px)").matches
	$scope.transitionState = false
	$scope.contentTransition = function(){
        if ($scope.transitionState == false) {
	        $scope.transitionState = true
			$scope.$on("$viewContentLoaded" , function (scope, next, current) {
		    	// $scope.$on('$viewContentLoaded', function(){
		    //Here your view content is fully loaded !!
		  		// setTimeout(function() { 
		        	console.log($scope.transitionState)
		        	$scope.transitionState = false 
		        	console.log($scope.transitionState)
		        // }, 01)
			  // })
		    })
		}
	}

	$scope.pageOverlay = false
	$scope.mobileMenu = false
	$scope.selectedSection = {}
	$scope.toggleMenu = function(){
		if ($scope.mobileMenu == true){
			console.log($scope.mobileMenu)
			document.getElementById("mobile-menu").setAttribute('class', '') 
			$scope.mobileMenu = false
			$scope.pageOverlay = false
		} else {
			$scope.mobileMenu = true
			$scope.pageOverlay = true
			document.getElementById("mobile-menu").setAttribute('class', 'open') 
		}
	}

	$scope.isActive = function(route) {
        return route === $location.path();
    }
	$scope.art = {
		fine: [
			{
				img: 'img/art/green-tears.jpg',
				med: 'Watercolor on Parchment',
				tags: [
					'watercolor', 
					'fine'
				],
			},
			{
				img: 'img/art/flower-face.jpg',
				med: 'Watercolor on Parchment',
				tags: [
					'watercolor', 
					'fine'
				],
			},
			{
				img: 'img/art/bars.jpg',
				med: 'Writing Ink on Parchment',
				tags: [
					'ink', 
					'fine'
				],
			},
			{
				img: 'img/art/screaming-heart.jpg',
				med: 'Watercolor on Parchment',
				tags: [
					'watercolor', 
					'fine'
				],
			}

		],
		digital: [
			{
				img: "img/art/eye-roll.jpg"
			},
			{
				img: "img/art/mia.png"
			},
			{
				img: "img/art/donut-vector.jpg"
			},
			{
				img: "img/art/eyes.png"
			},
			{
				img: "img/art/angelina2.jpg"
			},
			{
				img: "img/art/angelina.jpg"
			}


		],
		commission: [
			{
				img: 'img/art/eyegum-poster.jpg',
				med: 'Digital Art',
				tags: [
					'digital',
					'poster'
				],
			},
			{
				img: 'img/art/b&w-deck.jpg',
				med: 'Oil on Canadian Maple',
				tags: [
					'Oil',
					'skate-deck'
				],
			},
			{
				img: 'img/art/longboard-swirls.jpg',
				med: 'Oil on Canadian Maple',
				tags: [
					'Oil',
					'skate-deck'
				],
			},
			{
				img: 'img/art/longboards.jpg',
				med: 'Oil on Canadian Maple',
				tags: [
					'Oil',
					'skate-deck'
				],
			}
		],
		murals: [
			{
				img: 'img/art/mural-bear.jpg',
				med: 'Spray/Concrete',
				tags: [
					'commission', 
					'streetart'
				],
			},
			{
				img: 'img/art/tiger-mural.jpg',
				med: 'Spray/Concrete',
				tags: [
					'commission', 
					'streetart'
				],
			},
			{
				img: 'img/art/tasman-st-mural.jpg',
				med: 'Spray/Concrete',
				tags: [
					'commission', 
					'streetart'
				],
			}
		]
	}
})

apex.controller('homeController', function($scope, $timeout) {
	var i = 0
	$scope.slideOut = false
	var sections = (function(){
			var keys = []
			for (var k in $scope.art) keys.push(k)
			return keys
		})()
	var currentSection = sections[0]
	
	var iterateThroughImages = function(){
		console.log("I is: ", i)
		var toShow = []
		for (var j = 0; j < 4; j+=1){
			console.log("J is: ", j)
			if (i < $scope.art[currentSection].length){
				toShow.push($scope.art[currentSection][j]) 
			} else {
				i = 0 
				var sectionIndex = sections.indexOf(currentSection) + 1
				if (sectionIndex == 4) {
					currentSection = sections[0]
				} else {
					currentSection = sections[(sectionIndex)]
				}
				
				toShow.push($scope.art[currentSection][j])
			}
			i += 1

			if (!$scope.isActive("/")) return	
		}
		$scope.slideOut = true
		$scope.slides = toShow
		console.log($scope.slides)
		$timeout(iterateThroughImages, 3000)
		$scope.slideOut = false
	}
    iterateThroughImages()
    
})

apex.controller('artController', function($scope, $location, PortfolioSelection) {
	$scope.selectedSection = PortfolioSelection.section()
	$scope.selectedItem = PortfolioSelection.item()
	$scope.back = function(menu){
		$location.path('/' + menu)
	}
	$scope.viewSection = function(section){
			PortfolioSelection.setSection(section)
			$location.path('/view')
	}
	$scope.viewSelected = function(item){
		PortfolioSelection.setItem(item)
		console.log($scope.selectedItem)
		$location.path('view/item')
	}
})


apex.controller('contactController', function($scope) {
})


apex.service('PortfolioSelection', function() {
 var section = {}
 var item = {}
 function setSection(data) {
   section = data
 }
 function getSection() {
  return section
 }
 function setItem(data) {
   item = data
 }
 function getItem() {
  return item
 }
 return {
  setSection: setSection,
  section: getSection,
  setItem: setItem,
  item: getItem
 }
})