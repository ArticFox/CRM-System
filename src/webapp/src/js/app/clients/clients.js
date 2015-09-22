
app.controller('ClientsCtrl', ['$scope', function($scope, $http) {
    $scope.title = 'Замовники';
    $scope.clients = [
        {"id": 1, "nameProject": "dfОпsssssdисание проекта 1", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "2", "nameProject": "Опdfdsdисание проsadasdекта 2", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "3", "nameProject": "вфыОписание проекasdта 3", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "4", "nameProject": "фывОписание проекasdта 4", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "5", "nameProject": "цуОписание проеsadкта 5", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "6", "nameProject": "ывавыаывОписание пasdasdроекта 6", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "7", "nameProject": "ываываывОписание прasdsadоекта 7", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "77", "nameProject": "ываываОписание проasdasdекта 77", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "8", "nameProject": "Оываписание проекasdasdasdта 8", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"}
    ];
    /*$http.get('js/app/projects/projects.json').success(function(data, status, headers, config){
        console.log('Status: ', status, '   Headers: ', headers, '  Config: ', config);
        $scope.projects = data;

    });*/

    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function(fieldName){
        if($scope.sortField === fieldName){
            $scope.reverse = !$scope.reverse;
        }
        else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    };
    $scope.isSortUp = function(fieldName){
        return $scope.sortField === fieldName && !$scope.reverse;
    };
    $scope.isSortDown = function(fieldName){
        return $scope.sortField === fieldName && $scope.reverse;
    };
}]);



