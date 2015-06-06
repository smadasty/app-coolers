'use strict';

/**
 * @ngdoc function
 * @name coolersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coolersApp
 */
angular.module('coolersApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
