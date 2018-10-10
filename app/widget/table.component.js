export const table = {
    templateUrl: `./widget/tmpl/ors-table.html`,
    controller: function OrsTableCtrl() {
        console.log('orsTable start');

        this.data = [
            { id: 1, name: 'GUENEGO', description: 'hello', note: 12},
            { id: 2, name: 'DURAND', description: 'coucou', note: 15},
        ];
        this.names = ['id', 'name', 'description', 'note'];
        this.labels = ['ID', 'Name', 'Description', 'Note'];
    }
};


