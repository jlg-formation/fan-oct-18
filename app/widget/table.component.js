export const table = {
    templateUrl: `./widget/tmpl/ors-table.html`,
    controller: function OrsTableCtrl() {
        console.log('orsTable start');
        
        this.$onInit = () => {
            console.log('ngInit', this.records);
        }
    },
    bindings: {
        data: '<records',
        labels: '<',
        names: '<',
    }
};


