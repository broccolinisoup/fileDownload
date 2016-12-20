# fileDownload
An angular directive for downloading files

This directive currently is used for downloading only csv files. I am targeting to enhance this directive for pdf, tar, zip formats as well. I will update here for every single changes. 

How to use this directive?

1) Simple clone the repository on your local.

2) Copy the angular-download.js file into the directory where you put your static files. \

3) Import "download" module into your main module or whichever module you use. 

/* example /*

// Define the module
    var module = angular.module('app.main', ['download']);


4) In your controller, 

4.1)Encode your data into csv format. (This module doesn't provide encoding solution at the moment)

/* example */

// Create your template. I use ejs template for unix scripting. 

var template = new EJS({
                url: path_your_static_folder + '/js/templates/myScript.ejs'
            });

4.2)Render your template with the variables. (I assume you declare some variables such as $scope.app.myKernelVersion = 3.10.0-327.22.2.el7.x86 or $scope.myRHELVersion = 7 

$scope.configuration = template.render($scope.app);

4.3)Trigger the "download-ready" event and send your content to the directive.

$scope.$emit('download-ready', $scope.configuration);
    
5) Put the "file-download" attr into your html tag that you want to use for downloading. (I use HAML as a markup language. Recommended. Easy to write.)

%a.btn.btn-success{"file-download"=>"", "filename"=>"rhel-config-for-oracle.sh"} Download


