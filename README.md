# fileDownload
An angular directive for downloading files

This directive currently is used for downloading only csv files. I am targeting to enhance this directive for pdf, tar, zip formats as well. I will update here for every single changes. 

How to use this directive?

1) Simply, clone the repository on your local.

2) Copy the angular-download.js file into the directory where you put your custom directives or under the static files folder

3) Import "download" module into your main module or whichever module you use. 

* example *

Define the module
  var module = angular.module('app.main', ['download']);


4) In your controller, 

4.1)Encode your data into the format whatever you prefer.-Currently, only csv download is available- (This module doesn't provide encoding solutions)

 * example *
 $scope.data = "My formatted file content is need to be placed here";


4.3)Trigger the "download-ready" event and send your content to the directive.

$scope.$emit('download-ready', $scope.data);
    
5) Put the "file-download" element into your html that you want to use for downloading and provide a valid file name

<file-download file-name="myDocument.csv"/>  

