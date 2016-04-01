angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
})
.controller('FiltroController', function($scope, $stateParams) {
    $scope.filter = {
        range: 3
    };
})
.factory('$nativeSpinner', function($window, $ionicLoading){
    return {
        show: function(title, type, theme){
            if (!$window.plugins) {
                $ionicLoading.show({template: title});
            } else {
                $window.plugins.ProgressView.show(title, type, theme);    
            }
        },
        hide: function(){
            if (!$window.plugins) {
                $ionicLoading.hide();
            } else {
                $window.plugins.ProgressView.hide();  
            }
        }
    }
})
.controller('ResultadoBusca', function($scope, $stateParams, $nativeSpinner, $ionicPlatform, $timeout) {

    $ionicPlatform.ready(function() {
        $nativeSpinner.show('Carregando, aguarde...');
    });
    $timeout(function(){
        $nativeSpinner.hide();
    }, 4000);
    // $cordovaSpinnerDialog.show("", "Carregando, aguarde...", true);

    $timeout(function(){
        // $cordovaSpinnerDialog.hide();
    }, 4000);

    $scope.jogos = [
        {
            name: 'Grand Theaft Auto V',
            jogosOfertados: [
                {
                    'name': 'The Crew: Wild Run Edition'
                }
            ]
        }
    ];
})
.controller('ChatsController', function($scope, $stateParams) {
    $scope.chats= [
        {
            name: 'Juca Kifuri',
            yourGame: {
                name: 'GTA IV'
            },
            hisGame: {
                name: 'Forza 6'
            }
        },
        {
            name: 'David Beckham',
            yourGame: {
                name: 'Street Fighter V'
            },
            hisGame: {
                name: 'Forza Horizon 2'
            }
        }
    ];
})
.controller('PerfilTrocaController', function($scope, $stateParams) {
})
.controller('PerfilController', function($scope, $stateParams) {
    $scope.filter = {
        positive: true,
        negative: true,
    };
})
.controller('MeusJogosController', function(
    $scope,
    $stateParams,
    $ionicActionSheet
) {
    $scope.games = [
        {
            name: 'GTA V'
        },
        {
            name: 'The Crew: Wild Run Edition'
        }
    ];
})
.controller('MeuJogoController', function(
    $scope,
    $stateParams,
    $ionicActionSheet
) {
    $scope.games = [
        {
            name: 'GTA V'
        },
        {
            name: 'The Crew: Wild Run Edition'
        }
    ];

    $scope.onHold = function() {
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            // buttons: [
            //     { text: '<b>Share</b> This' },
            //     { text: 'Move' }
            // ],
            destructiveText: 'Sim',
            titleText: 'Você deseja remover este jogo dos interesses de "Grand Theaft Auto V"?',
            cancelText: 'Agora não',
            cancel: function() {
            },
            buttonClicked: function(index) {
                return true;
            }
        });
    };

})
.controller('AddInteresseController', function($scope, $stateParams) {
})
.controller('AddJogoController', function($scope, $stateParams) {
})
.controller('ChatController', function($scope, $stateParams) {
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
