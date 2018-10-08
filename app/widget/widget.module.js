(function () {
    'use strict';

    var app = angular.module('widget', []);


    app.directive(`orsPasswordInput`, function () {
        return {
            templateUrl: `./widget/tmpl/ors-password-input.html`,
            controller: function OrsPasswordInputCtrl() {
                console.log('OrsPasswordInputCtrl start');
                this.state = 'hidden';

                this.toggle = function() {
                    if (this.state === 'hidden') {
                        this.state = 'clear';
                    } else {
                        this.state = 'hidden';
                    }
                }
            },
            controllerAs: '$ctrl',
        };
    });

})();