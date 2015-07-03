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
Meteor.subscribe("userData");

// Accounts.ui.config({ passwordSignupFields: 'USERNAME_AND_EMAIL' });

Template.body.onRendered(function(){


// this.$('.sidebar').sidebar('toggle');
// this.$('#app-menu-button').sidebar('toggle');

// this.$('.left.demo.sidebar').first().sidebar('attach events', '.toggle.button');

// this.$('.toggle.button').removeClass('disabled');
// this.$('#app-menu').sidebar('toggle');

// this.$('.ui.sidebar')
//   .sidebar('attach events', '.launch.button')
// ;

// this.$(".dropdown").dropdown();

});

Template.home.onRendered(function(){

// SEMANTIC UI Components
this.$(".dropdown").dropdown();

});


 Template.body.helpers({
  current_user: function(){
      return Meteor.user();
    }
    // users: function () {
    //   return Meteor.users.find().fetch();
    // },
    // service: function (user) {
    //  if (user && user.services && user.services.google)    { return 'google'; }
    //   else if (user && user.services && user.services.github)    { return 'github'; }
    //   else if (user && user.services && user.services.instagram) { return 'instagram'; }
    //   else                                                       { return 'none'; }
    // },
    // name: function (user) {
    //   var name = '';
    //   if (user && user.profile && user.profile.name) {
    //     name = user.profile.name;
    //   }
    //   else if (user && user.username) {
    //     name = user.username;
    //   }
    //   return name;
    // }
  });