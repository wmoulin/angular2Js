'use strict';

describe('Le controller TripsListCtrl', function() {

    beforeEach(module('tripsModule'));

    it('doit alimenter le scope avec un zoom Google Maps par défaut', inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        $controller('TripsListCtrl', { $scope: scope });
        console.log(scope.trips);
        expect(scope.trips.length).toBe(5);
    }));

    it('doit alimenter le scope avec un centrage Google Maps par défaut', inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        $controller('TripsListCtrl', { $scope: scope });

        var expectedCentrage = {
            "latitude" : 46.22764,
            "longitude" : 2.21375
        };

        expect(scope.gmapsCenter).toEqual(expectedCentrage);
    }));


});
