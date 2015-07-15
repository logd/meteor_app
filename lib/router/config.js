Router.configure({
  layoutTemplate: 'main_layout',
  // waitOn: function() {
  //   // TODO: this subscribes to posts for every route
  //   // change this to be route-specific
  //   return Meteor.subscribe('posts');
  // },
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});