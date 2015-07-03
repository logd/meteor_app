Template.user_nav.helpers({
  user_name: function () {
    if(Meteor.user().services.google){
      return Meteor.user().services.google.name;
    } else {
      return "Current User";
    }
  }
});