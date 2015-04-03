define([], function(){
    'use strict';

    var ShellService = function(){
        var self = this;

        self.getContent = function(){
            return "some content to display";
        };

        return self;
    };
    return [ShellService];
});