Meteor.startup(function () {
  Session.setDefault({
    "disableCreate": false
  })
});

Meteor.subscribe("posts");
Meteor.subscribe("tags");
Meteor.subscribe("userData");


Template.body.onRendered(function(){

});

Template.home.onRendered(function(){

});


 Template.body.helpers({
  // current_user: function(){
  //     return Meteor.user();
  //   }
  });