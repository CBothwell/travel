"use strict";
angular.module("main.hotels", ["ui.bootstrap"]).config(function($stateProvider) {
  return $stateProvider.state("main.hotels", {
    url: "/list",
    abstract: true,
    views: {
      "content@": {
        templateUrl: "hotels/hotels.html"
      }
    }
  }).state("main.hotels.content", {
    url: "",
    views: {
      breadcrumb: {
        templateUrl: "hotels/breadcrumb.html",
        controller: "BreadcrumbCtrl"
      },
      filters: {
        templateUrl: "hotels/filters.html",
        controller: "FiltersCtrl"
      },
      list: {
        templateUrl: "hotels/grid.html",
        controller: "ListCtrl"
      }
    }
  });
});

"use strict";
angular.module("main.home", ["ui.bootstrap"]).config(function($stateProvider) {
  return $stateProvider.state("main.home", {
    url: "/",
    abstract: true,
    views: {
      "content@": {
        templateUrl: "home/home.html"
      }
    }
  }).state("main.home.content", {
    url: "",
    views: {
      banner: {
        templateUrl: "home/banner.html",
        controller: "BannerCtrl"
      },
      search: {
        templateUrl: "home/search.html",
        controller: "SearchCtrl"
      },
      lastminutelarge: {
        templateUrl: "home/lastminutelarge.html",
        controller: "LastMinuteLargeCtrl"
      },
      lastminutesmall: {
        templateUrl: "home/lastminutesmall.html",
        controller: "LastMinuteSmallCtrl"
      },
      topdeals: {
        templateUrl: "home/topdeals.html",
        controller: "TopDealsCtrl"
      }
    }
  });
});

"use strict";
angular.module("main", ["ngRoute", "restangular", "ui.router", "main.home", "main.hotels"]).config([
  "$routeProvider", "$locationProvider", "$httpProvider", "$stateProvider", "$urlRouterProvider", function($routeProvider, $locationProvider, $httpProvider, $stateProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $stateProvider.state("main", {
      url: "",
      abstract: true,
      views: {
        header: {
          templateUrl: "common/header.html",
          controller: "HeaderCtrl"
        },
        footer: {
          templateUrl: "common/footer.html",
          controller: "FooterCtrl"
        }
      }
    });
    $routeProvider.otherwise({
      redirectTo: "/"
    });
    return $locationProvider.html5Mode(true);
  }
]).run([
  "$rootScope", function($rootScope) {
    return $rootScope.loading = false;
  }
]);

"use strict";
angular.module("travelApp", ["main", "main.home", "main.hotels"]);

"use strict";
angular.module("main").controller("FooterCtrl", [
  "$scope", function($scope) {
    return $scope.links = [
      {
        name: "home",
        url: "/"
      }, {
        name: "about",
        url: "/about"
      }, {
        name: "contacts",
        url: "/contact"
      }
    ];
  }
]);

"use strict";
angular.module("main").controller("HeaderCtrl", [
  "$scope", function($scope) {
    return $scope.links = [
      {
        name: "home",
        url: "/"
      }, {
        name: "about",
        url: "/about"
      }, {
        name: "contacts",
        url: "/contact"
      }
    ];
  }
]);

"use strict";
angular.module("main").factory("Expedia", [
  "Restangular", function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      return RestangularConfigurer.setBaseUrl("/api");
    });
  }
]);

"use strict";
angular.module("main.home").controller("BannerCtrl", [
  "$scope", function($scope) {
    $scope.myInterval = 5000;
    return $scope.slides = [
      {
        image: "../img/slider/santorini.jpg",
        country: "Greece",
        city: "Santorini",
        price: "$1500"
      }, {
        image: "../img/slider/rome.jpg",
        country: "Italy",
        city: "Rome",
        price: "$1500"
      }, {
        image: "../img/slider/paris.jpg",
        country: "France",
        city: "Paris",
        price: "$1500"
      }
    ];
  }
]);

"use strict";
angular.module("main.home").controller("LastMinuteLargeCtrl", ["$scope", function($scope) {}]);

"use strict";
angular.module("main.home").controller("LastMinuteSmallCtrl", ["$scope", function($scope) {}]);

"use strict";
angular.module("main.home").controller("SearchCtrl", [
  "$scope", "Expedia", function($scope, Expedia) {
    var addFormSpace, removeFormSpace;
    $scope.search = {};
    $scope.today = function() {
      return $scope.dt = new Date();
    };
    $scope.today();
    $scope.showWeeks = true;
    $scope.toggleWeeks = function() {
      return $scope.showWeeks = !$scope.showWeeks;
    };
    $scope.clear = function() {
      $scope.search.checkinDt = null;
      return $scope.search.checkoutDt = null;
    };
    $scope.toggleMin = function() {
      return $scope.minDate = ($scope.minDate ? null : new Date());
    };
    $scope.toggleMin();
    $scope.openCheckIn = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      return $scope.checkInOpened = true;
    };
    $scope.openCheckOut = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      return $scope.checkOutOpened = true;
    };
    $scope.dateOptions = {
      "year-format": "'yy'",
      "starting-day": 1
    };
    $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "M/d/yyyy", "shortDate"];
    $scope.format = $scope.formats[2];
    $scope.getLocation = function(val) {
      return Expedia.one("geosearch", val).getList().then(function(data) {
        var locationInfoData, locations;
        locations = [];
        locationInfoData = data.LocationInfoResponse.LocationInfos;
        if (locationInfoData["@size"] > 1) {
          angular.forEach(locationInfoData.LocationInfo, function(item) {
            return locations.push({
              label: "" + item.city + ", " + item.countryName,
              value: item.destinationId
            });
          });
        } else {
          locations.push({
            label: "" + locationInfoData.LocationInfo.city + ", " + (locationInfoData.LocationInfo.countryName.replace('.', '')),
            value: locationInfoData.LocationInfo.destinationId
          });
        }
        return locations;
      });
    };
    $scope.search.rooms = [
      {
        numberOfAdults: 1,
        numberOfChildren: 0,
        showChildrenAges: false,
        ages: []
      }
    ];
    $scope.addRoom = function() {
      $scope.search.rooms.push({
        numberOfAdults: 1,
        numberOfChildren: 0,
        showChildrenAges: false,
        ages: []
      });
      return addFormSpace(65);
    };
    $scope.childrenAges = function() {
      var numberOfChildren, numberOfRows, rowHeight, x, _i;
      numberOfChildren = parseInt(this.room.numberOfChildren);
      rowHeight = 85;
      this.room.showChildrenAges = true;
      if (numberOfChildren > 0) {
        for (x = _i = 1; 1 <= numberOfChildren ? _i <= numberOfChildren : _i >= numberOfChildren; x = 1 <= numberOfChildren ? ++_i : --_i) {
          this.room.ages.push({
            age: 'Age'
          });
        }
      }
      if (_.indexOf([1, 2, 3], numberOfChildren) !== -1) {
        numberOfRows = 1;
      } else if (_.indexOf([4, 5], numberOfChildren) !== -1) {
        numberOfRows = 2;
      }
      if (this.previousChildren > numberOfChildren) {
        if (numberOfChildren === 0) {
          this.previousChildren = void 0;
          this.room.showChildrenAges = false;
          if (this.previousNumberOfRows === 1) {
            removeFormSpace(rowHeight);
          } else if (this.previousNumberOfRows === 2) {
            removeFormSpace(rowHeight * 2);
          }
        } else if (numberOfChildren !== 0) {
          if (this.previousNumberOfRows === 2 && numberOfRows === 1) {
            removeFormSpace(rowHeight);
          }
        }
      } else if (this.previousChildren < numberOfChildren) {
        if (this.previousNumberOfRows === 1 && numberOfRows === 2) {
          addFormSpace(rowHeight);
        } else if (this.previousChildren === 0) {
          if (numberOfRows === 1) {
            addFormSpace(rowHeight);
          } else if (numberOfRows === 2) {
            addFormSpace(rowHeight * 2);
          }
        }
      } else if (this.previousChildren === void 0) {
        if (numberOfRows === 1) {
          addFormSpace(rowHeight);
        } else if (numberOfRows === 2) {
          addFormSpace(rowHeight * 2);
        }
      }
      this.previousChildren = numberOfChildren;
      return this.previousNumberOfRows = numberOfRows;
    };
    $scope.removeRoom = function(index) {
      $scope.search.rooms.splice(index, 1);
      return removeFormSpace(65);
    };
    $scope.formFooterHeight = 261;
    $scope.formContentHeight = 263;
    removeFormSpace = function(height) {
      $scope.formContentHeight = $scope.formContentHeight - height;
      return $scope.formFooterHeight = $scope.formFooterHeight - height;
    };
    return addFormSpace = function(height) {
      $scope.formContentHeight = $scope.formContentHeight + height;
      return $scope.formFooterHeight = $scope.formFooterHeight + height;
    };
  }
]);

"use strict";
angular.module("main.home").controller("TopDealsCtrl", ["$scope", function($scope) {}]);

"use strict";
angular.module("main.hotels").controller("BreadcrumbCtrl", ["$scope", function($scope) {}]);

"use strict";
angular.module("main.hotels").controller("FiltersCtrl", ["$scope", "Expedia", function($scope, Expedia) {}]);

"use strict";
angular.module("main.hotels").controller("ListCtrl", ["$scope", function($scope) {}]);
