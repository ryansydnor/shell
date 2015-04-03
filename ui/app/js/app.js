define([
	'angular',
	'angularRoute',
	'angularAnimate',
	'controllers',
	'services',
	'uiBootstrap',
	'ngStrap',
	'ngStrapTpl',
	'loadingBar',
	'toaster'
	], function(angular){
		'use strict';

		var app = angular.module('shell', [
			'ngRoute',
			'ngAnimate',
			'ui.bootstrap',
			'chieffancypants.loadingBar',
			'toaster',
			'shell.controllers',
			'shell.services'
		]);

		app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider){
			cfpLoadingBarProvider.latencyThreshold = 100;
		}]);
		return app;
	});