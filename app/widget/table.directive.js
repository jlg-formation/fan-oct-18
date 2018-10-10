export const table = function () {
    return {
        scope: {},
        templateUrl: `./widget/tmpl/ors-table.html`,
        controller: function OrsTableCtrl() {
            console.log('orsTable start');
        },
        controllerAs: '$ctrl',
    };
}

