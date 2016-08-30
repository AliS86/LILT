(function() {
    'use strict';

    angular
        .module('app')
        .controller('picController', picController);

    Controller.$inject = ['$state', '$stateParams'];

    /* @ngInject */
    function Controller($state, $stateParams) {
        var vm = this;
        vm.image = 'picController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();