angular.module("qshop").controller("ContactController", function($scope,Contact,$state) {

  $scope.sendcontact = function() {
      var contact = {
          email:"",
          subject:"",
          message:""
      };
      contact.email = $scope.email;
      contact.subject = $scope.subject;
      contact.message = $scope.message;

      Contact.sendcontact(contact);
      // redirect pe prima pag dupa ce trimitem order
      $state.go('default');
  };



});
