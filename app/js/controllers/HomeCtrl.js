var module = angular.module('helloWorldApp');
module.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        $scope.hslArr1 = [];
        $scope.hslArr2 = [];
        $scope.hslArr3 = [];
        $scope.row1 = angular.element(document.querySelector('.color-row1')).find("div");
        $scope.row2 = angular.element(document.querySelector('.color-row2')).find("div");
        $scope.row3 = angular.element(document.querySelector('.color-row3')).find("div");
        function initHslArr () {
            for(let i = 0; i < 9; i++) {
                $scope.hslArr1.push("hsla(0, 0%, 85%, 0."+i*10+")");
                $scope.hslArr2.push("hsla(0, 0%, 55%, 0."+i*10+")");
                $scope.hslArr3.push("hsla(0, 0%, 25%, 0."+i*10+")");
            }
        }

        function initBox () {
            initHslArr();
            for(let i = 0; i < 9; i++) {
                setHsl($scope.row1[i], $scope.hslArr1, i);
                setHsl($scope.row2[i], $scope.hslArr2, i);
                setHsl($scope.row3[i], $scope.hslArr3, i);
            }
        }
        initBox();
        function setHsl (elem, arr, i) {
            elem.style.backgroundColor = arr[i];
        }
    }
]);
