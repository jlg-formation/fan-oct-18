import '../widget/widget.module';

const app = angular.module('layout', ['widget']);

['Header', 'Footer'].forEach(label => {
    app.directive(`ors${label}`, function () {
        return {
            templateUrl: `./layout/tmpl/ors-${label.toLowerCase()}.html`
        };
    });
});

app.directive(`orsBody`, function () {
    return {
        templateUrl: `./layout/tmpl/ors-body.html`,
        controller: class OrsBodyCtrl {
            constructor() {
                this.myRecords = [
                    { id: 1, name: 'GUENEGO', description: 'hello', note: 12 },
                    { id: 2, name: 'DURAND', description: 'coucou', note: 15 },
                ];
                this.labels = ['ID', 'Name', 'Description', 'Note'];
                this.names = ['id', 'name', 'description', 'note'];
                console.log(this.myRecords);
                this.myColor = 'red';
                this.doSomeThing = () => {
                    alert('coucou');
                }
            }
        },
        controllerAs: '$ctrl',
    };
});
