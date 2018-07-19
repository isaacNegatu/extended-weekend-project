app.controller('DashboardController', ['$http', function($http){
    console.log('DashboardController started');
    
    let self = this;

    self.petList = [];

    self.getPets = function () {
        $http({
            method : 'GET',
            url: '/hotel/pets'
        })
        .then(function(response) {
            console.log('pets GET', response.data);
            self.petList = response.data;
        })
        .catch(function(error) {
            console.log('pets GET error', error);
        });
    };
self.getPets();
}]);