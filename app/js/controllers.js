myApp.factory('productModels', function($http) {
  var factory = {};
  factory.getProductModels = function() {
      return $http.get('/api/product-models', {cache: true})
          .then(function(response) {
              return response.data;
          });
  }
  factory.pm = [];
  factory.otherData = 111;
  return factory;
});

myApp.controller('myController', function($scope, productModels) {
  $scope.signUpOpen = true;
  $scope.categories = [{id: 1, name: 'abc'}, {id: 2, name: 'abc'}, {id: 3, name: 'abc'}]
  $scope.pms = productModels.getProductModels();
});

