define(
	[
		'angular',
		'services/ShellService'
	],
	function(angular, ShellService) {
		'use strict';

		angular.module('shell.services', [])
			.service('ShellService', ShellService);
	});