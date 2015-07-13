Router.onBeforeAction(function () {
  if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
    this.redirect('login');
  } else {
    this.next();
  }
});

// Router.onBeforeAction('dataNotFound', {only: 'show_post'});

// LOGIN
Router.route('/login', {
   name: 'login',
   controller: 'LoginController'
});

// HOME
Router.route('/', {
   name: 'home',
   controller: 'HomeController'
});

// LIST POSTS LIST
// TODO: remove this is a route, since the posts list is being rendered on the homepage?
Router.route('/posts', {
   name: 'posts_list',
   controller: 'PostsListController'
});

// NEW POST - NOT IN USE
// Router.route('/new', {
//    name: 'new_post',
//    controller: 'NewPostController'
// });


// SHOW POST
Router.route('/posts/:_id', {
   name: 'show_post'
   // controller: 'ShowPostController'
});

// EDIT POST
Router.route('/posts/:_id/edit', {
   name: 'edit_post',
   controller: 'EditPostController'
});

// TAGS LIST
Router.route('/tags', {
  name: 'tags_list',
  controller: 'TagsListController'
});

// TAG SEARCH
Router.route('/tags/:tag', {
  name: 'tag_matches',
  controller: 'TagMatchesController'
});

// SEARCH
Router.route('/search', {
  name: 'search',
  controller: 'SearchController'
});
