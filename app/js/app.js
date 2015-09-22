'use strict';

// Declare app level module which depends on views, and components
angular.module('mrJup', [
    'ngRoute',
    'mrJup.services',
    'mrJup.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/sale', {
            templateUrl: 'view/sale.html',
            controller: 'SaleCtrl'
        })
            .otherwise({redirectTo: '/sale'});
    }]);
