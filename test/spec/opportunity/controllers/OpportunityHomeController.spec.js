'use strict';

describe('Controller: OpportunityHomeController', function () {

  // load the controller's module
  beforeEach(module('hubangularApp'));

  var _OpportunityHomeController,_scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    _scope = $rootScope.$new();
    _OpportunityHomeController = $controller('OpportunityHomeController', {
      $scope: _scope
    });
  }));

  it('should test dummy spec', function () {
    expect(true).toBe(true);
  });
});
