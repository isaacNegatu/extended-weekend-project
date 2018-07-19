let app = angular.module('PetHotel', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm',
    })
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController as vm',
    })
    .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageController as vm'
    })
    .otherwise({
        redirectTo: '/',
    });
});
