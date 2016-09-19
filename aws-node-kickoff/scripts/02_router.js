awsNodeKickoff.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('base',{
            url: '/',
            templateUrl: '/views/base.html',
            controller: 'base-controller'
        })
    $urlRouterProvider.otherwise('/');
});
