(function () {
    angular.module("app").controller('HomeCtrl', ['$scope', '$cookies',  HomeCtrl]);

    function HomeCtrl($scope, $cookies) {
        $scope.switchLang = switchLang;

        function switchLang(value) {
            $cookies.put("lang", value);
            location.reload();
        }
    }
}());
