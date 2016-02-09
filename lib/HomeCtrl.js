(function () {
    angular.module("app").controller('HomeCtrl', ['$scope', '$cookies',  HomeCtrl]);

    function HomeCtrl($scope, $cookies) {
        $scope.switchLang = switchLang;
        $scope.isDe = isDe;
        $scope.isRu = isRu;
        $scope.isLang = isLang;
        $scope.cntSpanFont = cntSpanFont;
        $scope.cnt4Font = cnt4Font;

        function switchLang(value) {
            $cookies.put("lang", value);
            location.reload();
        }

        function isDe() {
            var lang = $cookies.get("lang");
            if (!lang) {
                return true;
            }
            if (lang === 'de') {
                return true;
            }
        }
        function isRu() {
            var lang = $cookies.get("lang");
            if (lang === 'ru') {
                return true;
            }
        }

        function isLang(selector) {
            var lang = $cookies.get("lang");

            if (!lang || lang === 'de') {
                $(selector).css('font-family', "'BenchNine', sans-serif")
            } else {
                $(selector).css('font-family', "'Roboto Condensed', sans-serif");
                $(selector).css('font-weight', "400");
            }
        }

        function cntSpanFont() {
            var lang = $cookies.get("lang");

            if (!lang || lang === 'de') {
                $('.cnt h4 span').css('font-family', "'Julius Sans One', sans-serif")
            } else {
                $('.cnt h4 span').css('font-family', "'Roboto Condensed', sans-serif");
                $('.cnt h4 span').css('font-weight', "300");
            }
        }

        function cnt4Font() {
            var lang = $cookies.get("lang");

            if (!lang || lang === 'de') {
                $('.cnt4 h4').css('font-family', "'Julius Sans One', sans-serif")
            } else {
                $('.cnt4 h4').css('font-family', "'Roboto Condensed', sans-serif");
                $('.cnt4 h4').css('font-weight', "300");
            }
        }
    }
}());
