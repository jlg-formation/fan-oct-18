(function() {
    'use strict';

    var app = angular.module('main', []);

    app.directive('orsHeader', function() {
        return {
            templateUrl: './tmpl/ors-header.html'
        };
    });

})();
