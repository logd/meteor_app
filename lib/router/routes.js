
// **** GLOBAL ****
Router.configure({
  layoutTemplate: 'main_layout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});
Router.onBeforeAction(function () {
  if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
    this.redirect('login');
  } else {
    this.next();
  }
});

// **** POSTS ****
Router.route('/posts/:_id/edit', {
   name: 'edit_post',
   controller: 'EditPostController'
});
Router.route('/posts/:_id', {
   name: 'show_post'
   // controller: 'ShowPostController'
});


// **** TAGS ****
Router.route('/tags', {
  name: 'tags_list',
  controller: 'TagsListController'
});
Router.route('/tags/:tag', {
  name: 'tag_matches',
  controller: 'TagMatchesController'
});

// **** SEARCH ****
Router.route('/search', {
  name: 'search_results',
  controller: 'SearchController'
});

// **** LOGIN ****
Router.route('/login', {
   name: 'login',
   controller: 'LoginController'
});

// **** HOME/MY POSTS ****
Router.route('/:postsLimit?', {
   name: 'home',
   controller: 'HomeController'
});


// NEW POST - NOT IN USE
// Router.route('/new', {
//    name: 'new_post',
//    controller: 'NewPostController'
// });

// LIST POSTS LIST
// TODO: remove this is a route, since the posts list is being rendered on the homepage?
// Router.route('/posts', {
//    name: 'posts_list',
//    controller: 'PostsListController'
// });
