app.controller('DashboardController', ['PetHotelService','$http', function(PetHotelService, $http){
    console.log('DashboardController started');
    
    let self = this;

    self.petList = PetHotelService.petList;

    self.ownerList = PetHotelService.ownerList;


    self.getPets = function() {
        console.log('get pets called');
        
        PetHotelService.getPets();
    };

    self.addPet = function(newPet){
        console.log('add pets called');
        
        PetHotelService.addPet(newPet);
    };

    self.removePet = function (petGuestID) {
        PetHotelService.removePet(petGuestID);
    };


}]);
//     self.getPets = function () {
//         $http({
//             method : 'GET',
//             url: '/hotel/pets'
//         })
//         .then(function(response) {
//             console.log('pets GET', response.data);
//             self.petList = response.data;
//         })
//         .catch(function(error) {
//             console.log('pets GET error', error);
//         });
//     };
// self.getPets();

// //add pet from inputs
// self.addPet = function(newPet) {
//     console.log('Got to add pet', newPet);
    
//     $http({
//         method: 'POST',
//         url: 'hotel/pets',
//         data: newPet
//     })
//     .then(function(response){
//         console.log('addPet', response);
//         self.getPets();
//         self.newPet.owner = '';
//         self.newPet.pet = '';
//         self.newPet.breed = '';
//         self.newPet.color = '';
//     })
//     .catch(function(error){
//         console.log('addPet error', error);
//     });
// };

