import './css/ors-password-input.css';


export const passwordInput = function () {
    return {
        scope: {},
        templateUrl: `./widget/tmpl/ors-password-input.html`,
        controller: function OrsPasswordInputCtrl($element) {
            'ngInject';
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
        },
        controllerAs: '$ctrl',
    };
}

