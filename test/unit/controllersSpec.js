'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  beforeEach(module('myApp'));


  describe('myController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/product-models').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller('myController', {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function($rootScope) {
      scope.pms.then(function(result) {
        expect(result).toEqualData(
          [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);        
      });
      //expect(scope.pms).toEqual([]);
      //$httpBackend.flush();

      
    });

    it('should have initialize correct values', function() {
      expect(scope.signUpOpen).toBe(true);
      expect(scope.categories).toBeDefined();
    });


    /*it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });*/
  });


  /*describe('PhoneDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzPhoneData = function() {
          return {
            name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller(PhoneDetailCtrl, {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      expect(scope.phone).toEqualData({});
      $httpBackend.flush();

      expect(scope.phone).toEqualData(xyzPhoneData());
    });
  });*/
});
