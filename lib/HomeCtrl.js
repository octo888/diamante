(function () {
    angular.module("app").controller('HomeCtrl', ['$scope',  HomeCtrl]);

    function HomeCtrl($scope) {
        $scope.switchLang = switchLang;

        function switchLang(value) {

        }
    }
}());
