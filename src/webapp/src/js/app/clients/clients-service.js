// A RESTful factory for retreiving mails from 'mails.json'
app.factory('projects', ['$http', function ($http) {
  var path = 'js/app/projects/projects.json';
  var mails = $http.get(path).then(function (resp) {
    return resp.data.projects;
  });

  var factory = {};
  factory.all = function () {
    return projects;
  };
  factory.get = function (id) {
    return projects.then(function(projects){
      for (var i = 0; i < mails.length; i++) {
        if (projects[i].id == id) return projects[i];
      }
      return null;
    })
  };
  return factory;
}]);
