(function () {
    'use strict';

    const app = angular.module('main', ['layout']);

    app.directive(`orsMain`, function () {
        return {
            templateUrl: `./ors-main.html`
        };
    });

})();
