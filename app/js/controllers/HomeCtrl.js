app.controller('HomeCtrl', [
    '$scope', 'ConverColor', 'GenerateColor',
    function($scope, ConverColor, GenerateColor) {
        $scope.hvalue = '';
        $scope.hslArr = [[],[],[]];
        $scope.row1 = angular.element(document.querySelector('.color-row1')).find("div");
        $scope.row2 = angular.element(document.querySelector('.color-row2')).find("div");
        $scope.row3 = angular.element(document.querySelector('.color-row3')).find("div");
        $scope.rows = [];

        $scope.pushRows = (function() {
            $scope.rows.push($scope.row1);
            $scope.rows.push($scope.row2);
            $scope.rows.push($scope.row3);
        })();

        // $scope.$on('$viewContentLoaded', $scope.initBox());

        GenerateColor.initColor($scope.hslArr, $scope.rows);
        
    }
]);
