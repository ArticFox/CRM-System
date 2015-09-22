
app.controller('ProjectsCtrl', ['$scope', function($scope, $http) {
    $scope.title = 'Проекти';
    $scope.projects = [
        {"id": 1, "nameProject": "dfОпsdисание проекта 1", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "2", "nameProject": "Опdfисание проекта 2", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "3", "nameProject": "вфыОписание проекта 3", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "4", "nameProject": "фывОписание проекта 4", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "5", "nameProject": "цуОписание проекта 5", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "6", "nameProject": "ывавыаывОписание проекта 6", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "7", "nameProject": "ываываывОписание проекта 7", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "77", "nameProject": "ываываОписание проекта 77", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "77", "nameProject": "ываываОписание проекта 77", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"},
        {"id": "8", "nameProject": "Оываписание проекта 8", "client":"Клиент", "deadLine":"Кінцевій термін", "status":"Розробка"}
    ];
    /*$http.get('js/app/projects/projects.json').success(function(data, status, headers, config){
        console.log('Status: ', status, '   Headers: ', headers, '  Config: ', config);
        $scope.projects = data;

    });*/


    var date = new Date();
    $scope.today = date;

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



