import 'angular';

import './layout/layout.module';

const app = angular.module('main', ['layout']);

app.directive(`orsMain`, function () {
    return {
        templateUrl: `./ors-main.html`
    };
});

