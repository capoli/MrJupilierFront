'use strict';

angular.module('mrJup.controllers', [])
    .controller('SaleCtrl', ['$scope', 'SaleService', function($scope, SaleService) {
        $scope.products = [
            {id:1,name:'duvel'},
            {id:2,name:'bolleke'},
            {id:3,name:'tripple westmalle'}
        ];
        $scope.metrics = [
            {id:1,name:'vat'},
            {id:2,name:'bak'},
            {id:3,name:'fles'}
        ];
        $scope.steps = [
            {visible:true},
            {visible:false},
            {visible:false},
            {visible:false}
        ];

        this.initValues = function() {
            $scope.product = $scope.products[0];
            $scope.metric = $scope.metrics[0];
            $scope.amount = 0;
            $scope.steps = [
                {visible:true},
                {visible:false},
                {visible:false},
                {visible:false}
            ];
        };
        this.initValues();

        $scope.checkProduct = function(p) {
            $scope.product = p;
        };

        $scope.checkMetric = function(m) {
            $scope.metric = m;
        };

        $scope.next = function(index) {
            if(index > 0) {
                $scope.steps[index - 1].visible = false;
            }
            $scope.steps[index].visible = true;
        };

        $scope.previous = function(index) {
            if(index < $scope.steps.length - 1) {
                $scope.steps[index + 1].visible = false;
            }
            $scope.steps[index].visible = true;
        };

        $scope.cancel = function() {
            this.initValues();
        }.bind(this);

        $scope.confirm = function() {
        };
    }]);
