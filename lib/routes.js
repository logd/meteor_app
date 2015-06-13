
// GLOBAL
// Default settings for all routes
Router.configure({
  layoutTemplate: 'ApplicationLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
  // ,
  // waitOn: function () {
  //   return Meteor.subscribe("userData");
  // }
  // ,
  // waitOn: function() {

  //   // TODO: this subscribes to posts for every route.  limit what is subscribed to in the future
  //   return Meteor.subscribe('posts');
  // }
});

// Router.onBeforeAction(function () {
//   // all properties available in the route function
//   // are also available here such as this.params

//   if (!Meteor.userId()) {
//     // if the user is not logged in, render the Login template
//     this.render('login');
//   } else {
//     // otherwise don't hold up the rest of hooks or our route/action function
//     // from running
//     this.next();
//   }
// });


