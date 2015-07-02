// "use strict";
// Meteor.startup(function() {
//    $('body').addClass('pushable');
// });

// $('.dropdown').dropdown({
//   // you can use any ui transition
//   transition: 'drop'
// });

// Meteor.startup(function () {
//   // Session.setDefault({
//   //   "contentIsEmpty": false,
//   //   "isEditing": false
//   // })
// });

Meteor.subscribe("posts");
Meteor.subscribe("tags");

 Template.body.helpers({
    users: function () {
      return Meteor.users.find().fetch();
    },
    service: function (user) {
      if      (user && user.services && user.services.twitter)   { return 'twitter'; }
      else if (user && user.services && user.services.facebook)  { return 'facebook'; }
      else if (user && user.services && user.services.google)    { return 'google'; }
      else if (user && user.services && user.services.github)    { return 'github'; }
      else if (user && user.services && user.services.instagram) { return 'instagram'; }
      else                                                       { return 'none'; }
    },
    name: function (user) {
      var name = '';
      if (user && user.profile && user.profile.name) {
        name = user.profile.name;
      }
      else if (user && user.username) {
        name = user.username;
      }
      return name;
    }
  });