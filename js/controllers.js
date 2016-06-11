apex.controller('mainController', function($scope, $location, ImageDatabase) {
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
	$scope.pageTitle = ""
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
		 return ($location.path().indexOf(route) > -1)
    }

	$scope.back = function(menu){
		console.log("BAAAACK")
		$location.path('/' + menu)
	}


	$scope.art = ImageDatabase.art()
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
		var toShow = []
		for (var j = 0; j < 4; j+=1){
			if (i < $scope.art[currentSection].length){
				toShow.push($scope.art[currentSection][i]) 
			} else {
				i = 0 
				var sectionIndex = sections.indexOf(currentSection) + 1
				if (sectionIndex == 4) {
					currentSection = sections[0]
				} else {
					currentSection = sections[(sectionIndex)]
				}
				
				toShow.push($scope.art[currentSection][i])
			}
			i += 1

			if (!$scope.isActive("/")) return	
		}
		$scope.slideOut = true
		$scope.slides = toShow
		console.log($scope.slideOut)
		$timeout(iterateThroughImages, 5000)
		$scope.slideOut = false
	}
    iterateThroughImages()
    
})

apex.controller('artController', function($scope, $location, PortfolioSelection) {
	$scope.selectedSection = PortfolioSelection.section()
	$scope.selectedItem = PortfolioSelection.item()
	$scope.pageTitle = PortfolioSelection.title()
	$scope.viewSection = function(section, title){
			console.log(section)
			PortfolioSelection.setSection(section)
			PortfolioSelection.setTitle(title)
			$location.path('art/view')
	}
	$scope.viewSelected = function(item){
		PortfolioSelection.setItem(item)
		console.log($scope.selectedItem)
		$location.path('art/view/item')
	}
})


apex.controller('apparelController', function($scope) {
})