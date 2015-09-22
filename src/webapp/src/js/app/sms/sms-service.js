// A RESTful factory for retreiving mails from 'sms.json'
app.factory('sms', ['$http', function ($http) {
  var path = 'js/app/sms/sms.json';
  var sms = $http.get(path).then(function (resp) {
    return resp.data.sms;
  });

  var factory = {};
  factory.all = function () {
    return sms;
  };
  factory.get = function (id) {
    return sms.then(function(sms){
      for (var i = 0; i < sms.length; i++) {
        if (sms[i].id == id) return sms[i];
      }
      return null;
    })
  };
  return factory;
}]);