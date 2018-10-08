(function () {
    'use strict';

    var app = angular.module('main', ['layout']);

    app.directive(`orsMain`, function () {
        return {
            templateUrl: `./ors-main.html`
        };
    });

})();
