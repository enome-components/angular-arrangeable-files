var mod = window.angular.module('arrangeable-files', [ require('angular-file-manager'), require('angular-arrangeable-array') ]);

mod.directive('arrangeableFiles', function () {

  return {
    restrict: 'E',
    scope: { selected: '=', fileserver: '=' },
    template: require('./template'),
    controller: function ($scope) { $scope.full_screen = false; }
  };

});

module.exports = 'arrangeable-files';
