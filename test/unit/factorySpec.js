//
// test/unit/controllers/controllersSpec.js
//
var RESPONSE = [];
describe("Unit: Product Model Factory", function() {
  var scope;


  beforeEach(module('myApp'));

  beforeEach(inject(function($controller, $httpBackend, $rootScope) {
    scope = $rootScope;

    $httpBackend.whenGET('/api/product-models').respond(RESPONSE);
    $controller('myController', {$scope: scope});

    $httpBackend.flush();
  }));
  

  it('should have a pm variable', function(productModels) {
    //expect(productModels.pm.length).toBe(0);
    //expect(productModels.otherData).toBe(111);
    //expect(productModels.getProductModels()).toBe([]);
  });

});
