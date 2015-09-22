'use strict';

angular.module('mrJup.services', [])
    .factory('SaleService', ['$q', 'Config', '$http',
        function ($q, Config, $http) {
            var places = [];
            var place = {};

            function createSale(post) {
                //post.creator = AuthService.currentUserId();
                var callbacks = {
                    success: function (res) {
                       return null;
                    },
                    error: function () {
                        $q.reject('error ' + Config.server + '/sale/create');
                    }
                };
                return $http.post(Config.server + '/sale/create', post)
                    .then(callbacks.success, callbacks.error);
            }

            return {
                create: createSale
            }
        }])
    .service('Config', function () {
        return {
            //server: 'https://plek.herokuapp.com',
            //server: 'http://10.99.11.80:1337',
            server: 'http://localhost:1337' /*For iOS emulators*/
            //server: 'http://10.0.3.2:1337', /*For genymotion*/
            //server: 'http://10.0.2.2:1337', /*For generic android emulator*/
        };
    });