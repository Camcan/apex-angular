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

apex.controller('homeController', function($scope, $location) {
	
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

apex.controller('slideShowController', function($scope, $timeout, PortfolioSelection){
	$scope.slideshowIndex = 0
	var slidesInSlideShow = $scope.selectedItem.imgs.length
	var slideShow = function(){
	 	console.log(slidesInSlideShow)
		 var slideTimer = function() {
		 	console.log('Slide: ', $scope.slideshowIndex)
				    if($scope.slideshowIndex < slidesInSlideShow - 1){
						$scope.$apply(
						    $scope.slideshowIndex += 1
					    )
					}else{
						$scope.$apply(
					    	$scope.slideshowIndex = 0
					    )
					}
			 $timeout(slideTimer, 4000)
		 }
		 $timeout(slideTimer, 4000)
	}
	slideShow()
})

apex.controller('apparelController', function($scope) {
})