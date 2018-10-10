import { passwordInput } from './password-input.directive';
import { table } from './table.component';
angular.module('widget', [])
    .directive('orsPasswordInput', passwordInput)
    .component('orsTable', table)
