define(
	[
		'angular',
		'controllers/ShellController'
	],
	function(angular, ShellController) {
		'use strict';

		return angular.module('shell.controllers', [])
			.controller('ShellController', ShellController);
	});