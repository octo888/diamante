'use strict';

/* App Module */

var soloApp = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'pascalprecht.translate'

]);

soloApp.config(['$routeProvider', '$httpProvider', '$translateProvider', '$locationProvider',
    function ($routeProvider, $httpProvider, $translateProvider, $locationProvider) {

        var lang;
        angular.injector(['ngCookies']).invoke(['$cookies', function($cookies) {
            lang = $cookies.get("lang");
            if (!lang) {
                lang = "ru";
            }
        }]);

        $translateProvider.useUrlLoader("messages/" + "ru" + ".json");
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage("de");

        $locationProvider.html5Mode(true);

    }])
    .run(function ($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function (event, next, curent) {

        });
    });