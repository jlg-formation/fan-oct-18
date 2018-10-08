(function () {
    'use strict';

    angular.module('widget')
        .directive(`orsTable`, function () {
            return {
                scope: {},
                templateUrl: `./widget/tmpl/ors-table.html`,
                controller: function OrsTableCtrl() {
                    console.log('orsTable start');
                },
                controllerAs: '$ctrl',
            };
        });

})();