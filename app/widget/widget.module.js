(function () {
    'use strict';

    var app = angular.module('widget', []);


    app.directive(`orsPasswordInput`, function () {
        return {
            templateUrl: `./widget/tmpl/ors-password-input.html`,
            controller: ['$element', function OrsPasswordInputCtrl($element) {
                console.log('OrsPasswordInputCtrl start', $element);
                this.state = 'hidden';
                this.password = '';

                this.toggle = function () {
                    if (this.state === 'hidden') {
                        this.state = 'clear';
                        setTimeout(() => {
                            $element[0].querySelector('input[type=text]')
                                .focus();
                        }, 0)
                    } else {
                        this.state = 'hidden';
                        setTimeout(() => {
                            $element[0].querySelector('input[type=password]')
                                .focus();
                        }, 0)
                    }

                }
            }],
            controllerAs: '$ctrl',
        };
    });

})();