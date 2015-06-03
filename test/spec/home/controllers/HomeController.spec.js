'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('hubangularApp'));

  var _HomeController,_scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    _scope = $rootScope.$new();
    _HomeController = $controller('HomeController', {
      $scope: _scope
    });
  }));

  it('should test dummy spec', function () {
    expect(true).toBe(true);
  });
});
