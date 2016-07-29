angular.module("qshop").factory("Contact", function($http) {

  var contact = {};
  contact.sendcontact = function(contact) {
      //trim la server
      console.log("Mesaj trimis",contact);
    $http.post('http://10.59.0.30:3000/posts',contact);

  };
  return contact;
});
