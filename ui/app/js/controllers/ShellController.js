define([], function(){
    'use strict';

    var ShellController = function($scope, ShellService) {
        $scope.content = ShellService.getContent();
    };

    return ["$scope", "ShellService", ShellController];
});