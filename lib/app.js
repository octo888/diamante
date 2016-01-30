'use strict';

/* App Module */

var soloApp = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'pascalprecht.translate'

]);

soloApp.config(['$routeProvider', '$httpProvider', '$translateProvider',
    function ($routeProvider, $httpProvider, $translateProvider) {

       /* var lang;
        angular.injector(['ngCookies']).invoke(['$cookies', function($cookies) {
            lang = $cookies.get("lang");
            if (!lang) {
                lang = "ru";
            }
        }]);*/

        $translateProvider.useUrlLoader("messages/" + "en" + ".json");
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage("en");

    }])
    .run(function ($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function (event, next, curent) {

        });
    });