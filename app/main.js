(function() {
    'use strict';

    var app = angular.module('main', []);

    ['Header', 'Body', 'Footer'].forEach(label => {
        app.directive(`ors${label}`, function() {
            return {
                templateUrl: `./tmpl/ors-${label.toLowerCase()}.html`
            };
        });
    });
    
   
  

})();
