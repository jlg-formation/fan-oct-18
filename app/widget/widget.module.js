import { passwordInput } from './password-input.directive';
import { table } from './table.directive';
angular.module('widget', [])
    .directive('orsPasswordInput', passwordInput)
    .directive('orsTable', table)
