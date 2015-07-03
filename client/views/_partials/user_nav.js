Template.user_nav.helpers({
  user_name: function () {
    // TODO: this creates a bug, get the name a different way
    if(Meteor.user()){
      return Meteor.user().services.google.name;
    } else {
      return "Current User";
    }
  }
});

Template.user_nav.events({
  "submit .logout_event": function (e,t) {
    e.preventDefault();
    Meteor.logout(function(error){
      if(error){
        alert(error);
      }
       Router.go('login');
    });
   
  }

});