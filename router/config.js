Router.configure({
  layoutTemplate: 'AppLayout',
  // waitOn: function() {
  //   return Meteor.subscribe('posts');
  // },
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});



// // GLOBAL
// // Default settings for all routes
// Router.configure({
//   layoutTemplate: 'ApplicationLayout',
//   loadingTemplate: 'loading',
//   notFoundTemplate: 'notFound'
//   // ,
//   // waitOn: function () {
//   //   return Meteor.subscribe("userData");
//   // }
//   // ,
//   // waitOn: function() {

//   //   // TODO: this subscribes to posts for every route.  limit what is subscribed to in the future
//   //   return Meteor.subscribe('posts');
//   // }
// });

