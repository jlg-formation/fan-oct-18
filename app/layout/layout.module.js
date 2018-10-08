(function() {
    'use strict';

    var app = angular.module('layout', ['widget']);

    ['Header', 'Body', 'Footer'].forEach(label => {
        app.directive(`ors${label}`, function() {
            return {
                templateUrl: `./layout/tmpl/ors-${label.toLowerCase()}.html`
            };
        });
    });
    
   
  

})();