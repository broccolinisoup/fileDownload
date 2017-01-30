/*global document, window, angular, define*/

define(['angular'], function (angular) {
    "use strict";

    // Define the module
    var module = angular.module('download', []);

    module.directive('fileDownload', function () {
        return {
            restrict: 'E',
            template : "<a class='btn btn-primary btn-lg'>Download</a>",
            replace : true,
            link: function (scope, element) {
                // When the download is ready, attach the data to the link. Enable the link downloadable
                scope.$on('download-ready', function (event, data) {
                    var file = element.attr('file-name');
                    if(file.indexOf('.') !== -1){
                        var format = file.substr(file.indexOf('.') + 1);
                        var dataType = (function (type) {
                            return {
                                csv : "data:attachment/csv,",
                                // pdf : "data:application/pdf;base64,"
                            }[type];
                        }(format));

                        if(dataType !== undefined){
                            element.attr({
                                href: dataType + encodeURIComponent(data),
                                download : element.attr('file-name')});
                        }
                    }
                });
            }
        }
    });
    return module;
});