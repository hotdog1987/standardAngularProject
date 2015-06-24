'use strict';

// MODULE CONFIGURATION
function AppConfig($i18nextProvider,$stateProvider,$urlRouterProvider){

  // Now set up the states
  $stateProvider
    .state('abstract',{
      templateUrl: 'common/views/abstract.html'
    })
    .state('abstract.home',{
      url:'/',
      templateUrl: 'home/views/main.html',
      controller: 'HomeController as HomeCtrl'
    })
    .state('abstract.opportunity',{
      url:'/opportunity',
      templateUrl: 'opportunities/views/main.html',
      controller: 'OpportunityHomeController as OpportunityHomeCtrl'
    });

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  // INITIALIZE i18next LOCALIZATION
  $i18nextProvider.options = {
    lng: 'en',
    useCookie: false,
    useLocalStorage: false,
    fallbackLng: 'en',
    resGetPath: 'common/locales/__lng__/__ns__.json',
    defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
  };
}

function AppRun($rootScope){
  $rootScope.errorField = false;
  $rootScope.errorMessage = false;

  $rootScope.successField = false;
  $rootScope.successMessage = false;
}

// MAIN MODULE OF THE APPLICATION
angular.module('hubangularApp', ['ngAnimate','ngCookies','ngResource','ngSanitize','ngTouch',
                                  'ui.bootstrap','ui.router','ui.grid',
                                  'datatables','jm.i18next',
                                  'httpIntercept','httpIntercept.directives',
                                  'hubangularApp.controllers'])

  .config(['$i18nextProvider','$stateProvider','$urlRouterProvider',AppConfig])
  .run(['$rootScope',AppRun]);

angular.module('hubangularApp.controllers', []);
