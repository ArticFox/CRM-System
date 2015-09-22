app.controller('SMSCtrl', ['$scope', function($scope) {
  $scope.folds = [
    {name: 'Відправленні', filter:''},
    {name: 'Чернетки', filter:'sent'},
    {name: 'Видаленні', filter:'trash'}
  ];

}]);

app.controller('SMSListCtrl', ['$scope', 'sms', '$stateParams', function($scope, sms, $stateParams) {
  $scope.fold = $stateParams.fold;
  sms.all().then(function(sms){
    $scope.sms = sms;
  });
}]);

app.controller('SMSDetailCtrl', ['$scope', 'sms', '$stateParams', function($scope, sms, $stateParams) {
  sms.get($stateParams.SMSId).then(function(sms){
    $scope.sms = sms;
  })
}]);

app.controller('SMSNewCtrl', ['$scope', function($scope) {
  $scope.sms = {
    to: '',
    content: ''
  };
  $scope.tolist = [
    {name: 'Сергій Коваль', number:'+380965460502'},
    {name: 'Сергій Павлюк', number:'+380673775553'},
    {name: 'Дмитро Підлісний', number:'+380968140013'}
  ];
}]);

angular.module('app').directive('labelColor', function(){
  return function(scope, $el, attrs){
    $el.css({'color': attrs.color});
  }
});