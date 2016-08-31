(function() {
    'use strict';

    angular
        .module('app')
        .controller('picController', picController);

    picController.$inject = ['$state', '$stateParams'];

    /* @ngInject */
    function picController($state, $stateParams) {
        var vm = this;
        vm.image = 'picController';
        vm.id = $stateParams.id;

        activate();

        ////////////////

        function activate() {
        }
    }
})();