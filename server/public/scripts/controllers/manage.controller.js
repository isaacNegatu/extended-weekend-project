app.controller('ManageController', ['PetHotelService', '$http', function(PetHotelService, $http){ 
    console.log('ManageController started');
    
    let self = this;

    self.ownerList = PetHotelService.ownerList;

    self.getOwners = function() {
        console.log('get owners called');
        
        PetHotelService.getOwners();
    };

    self.addOwner = function(newOwner){
        console.log('add owners called');
        
        PetHotelService.addOwner(newOwner);
    };
}]);
//     self.ownerList = [];

//     self.getOwners = function () {
//         $http({
//             method : 'GET',
//             url: '/hotel/owners'
//         })
//         .then(function(response) {
//             console.log('owners GET', response.data);
//             self.ownerList = response.data;
//         })
//         .catch(function(error) {
//             console.log('owners GET error',error);
//         });
//     };
// self.getOwners();
