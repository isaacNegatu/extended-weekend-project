app.service('PetHotelService', ['$http', function ($http) {
    let self = this;

    console.log('PetHotelService started');


    self.petList = { list: [] };
    self.ownerList = { list: [] };

//get pets from inputs
    self.getPets = function () {
        $http({
            method : 'GET',
            url: '/hotel/pets'
        })
        .then(function(response) {
            console.log('pets GET', response.data);
            self.petList.list = response.data;
        })
        .catch(function(error) {
            console.log('pets GET error', error);
        });
    };


//add pet from inputs
self.addPet = function(newPet) {
    console.log('Got to add pet', newPet);
    
    $http({
        method: 'POST',
        url: 'hotel/pets',
        data: newPet
    })
    .then(function(response){
        console.log('addPet', response);
        self.getPets();
        // self.newPet.owner = '';
        newPet.pet = null;
        newPet.breed = null;
        newPet.color = null;
    })
    .catch(function(error){
        console.log('addPet error', error);
    });
};



self.getOwners = function () {
    $http({
        method : 'GET',
        url: '/hotel/owners'
    })
    .then(function(response) {
        console.log('owners GET', response.data);
        self.ownerList.list = response.data;
    })
    .catch(function(error) {
        console.log('owners GET error',error);
    });
};

self.addOwner = function(newOwner) {
    console.log('Got to add owner', newOwner);
    
    
    $http({
        method: 'POST',
        url: 'hotel/owners',
        data: newOwner
    })
    .then(function(response){
        console.log('addOwner', response);
        self.getOwners();
    })
    .catch(function(error){
        console.log('addOwner error', error);
    });
};

self.getOwners();
self.getPets();

}]);