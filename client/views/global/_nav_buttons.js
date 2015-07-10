Template.nav_buttons.helpers({
  newPost: function () {
    return LogdButtons.newPost;
  }
});

Template.nav_buttons.events({
  "click .logout": function (e,t) {
    e.preventDefault();
    Meteor.logout(function(error){
      if(error){
        alert(error);
      }
       Router.go('login');
    });
   
  }

});