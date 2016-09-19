var awsNodeKickoff = angular.module("aws-node-kickoff", [ "ui.router", "ngMaterial" ]);

awsNodeKickoff.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("base", {
        url: "/",
        templateUrl: "/views/base.html",
        controller: "base-controller"
    });
    $urlRouterProvider.otherwise("/");
});

awsNodeKickoff.controller("base-controller", function($scope) {
    console.log("Hello from Base Controller");
});