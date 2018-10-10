import 'angular';



import 'angular/angular-csp.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';

import './layout/layout.module';

const app = angular.module('main', ['layout']);

app.directive(`orsMain`, function () {
    return {
        templateUrl: `./ors-main.html`
    };
});

