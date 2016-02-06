'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'pascalprecht.translate'

]);

app.config(['$routeProvider', '$httpProvider', '$translateProvider', '$locationProvider',
    function ($routeProvider, $httpProvider, $translateProvider, $locationProvider) {

        var lang;
        angular.injector(['ngCookies']).invoke(['$cookies', function($cookies) {
            lang = $cookies.get("lang");
            if (!lang) {
                lang = "de";
            }
        }]);

        $translateProvider.useUrlLoader("messages/" + lang + ".json");
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage("de");

        $locationProvider.html5Mode(true);

    }])
    .run(function ($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function (event, next, curent) {

        });
    });