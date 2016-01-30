'use strict';

/* App Module */

var soloApp = angular.module('soloApp', [
    'ngRoute',
    'ngCookies'

]);

soloApp.config(['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider) {

    }])
    .run(function ($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function (event, next, curent) {

        });
    });