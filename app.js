var app = angular.module('myApp', ['ngRoute','dndLists']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/Managemployes', {
    templateUrl : 'pages/Managemployes.html',
    controller  : 'ManagemployesController'
  })

  .when('/dragdrop', {
    templateUrl : 'pages/dragdrop.html',
    controller  : 'dragdropController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.filtersearch = {};
  $scope.users = [
    
    {name : "Rashed", fullname : "Shuvro Nil", email : "rashed@mail.com",phone :8885417893 ,type:"permanent",profile:10},
    {name : "Javad", fullname : "Nazmul Hossian", email : "nazmul@mail.com",phone :8885896321,type:"contract",profile:50},
    {name : "Lizu", fullname : "Sumona Sharmin", email : "lizu@mail.com",phone :8885925218,type:"permanent",profile:20},
    {name : "james", fullname : "Shuvro Nil", email : "rashed@mail.com",phone :8885417893,type:"contract",profile:90},
    {name : "camron", fullname : "Nazmul Hossian", email : "camron@mail.com",phone :8885896321,type:"permanent",profile:70},
    {name : "luis", fullname : "Sumona Sharmin", email : "luis@mail.com",phone :8885925218,type:"contract",profile:15},
];
});

app.controller('ManagemployesController', function($scope) {  
  $scope.newUser = {};
  $scope.clickedUser = {};
  $scope.alertMassege = "";
  
  
  $scope.users = [
    
      {name : "Rashed", fullname : "Shuvro Nil", email : "rashed@mail.com",phone :8885417893},
      {name : "Javad", fullname : "Nazmul Hossian", email : "nazmul@mail.com",phone :8885896321},
      {name : "Lizu", fullname : "Sumona Sharmin", email : "lizu@mail.com",phone :8885925218},
             
  ];
  
  
  $scope.saveUser = function(){    
      $scope.users.push($scope.newUser);
      $scope.newUser = {};
      
      $scope.alertMassege = "Created successfully!!";
  };
  
  
  $scope.selectUser = function(user){
      console.log(user);
      $scope.clickedUser = user;
  };
  
  $scope.updateUser = function (){
      $scope.alertMassege = "Update Successfully!!";
  };
  
  
  $scope.deleteUser = function(){
      $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
      $scope.alertMassege = "Deleted successfully!!";
  };
  
  $scope.clickedAlert = function(){
      $scope.alertMassege = "";
  };
  
});

app.controller('dragdropController', function($scope) {
   
    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "employee A" + i});
        $scope.models.lists.B.push({label: "employee B" + i});
    }
    debugger;
    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
});
