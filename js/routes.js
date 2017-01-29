(function(){

var app = angular.module("hexModule", ["ngRoute"]);

//routes
app.config(function($routeProvider){

  $routeProvider.when("/work", {
    templateUrl: "./partials/projects.html",
  });

  $routeProvider.when("/art", {
    templateUrl: "./partials/art.html",
  });

  $routeProvider.otherwise({
    templateUrl: "./partials/splash.html"
  });

});

})();
