Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts');}
});

// TODO: Limit what is loaded for waitOn to be only what this user needs

Router.route('/', { name: 'postsList' });