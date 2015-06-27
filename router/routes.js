Router.onBeforeAction(function () {
  if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
    this.redirect('login');
  } else {
    this.next();
  }
});

Router.onBeforeAction('dataNotFound', {only: 'show_post'});

// HOMEPAGE
Router.route('/', function() {
 if (Posts.find( { _id:Meteor.userId() } ).count() === 0) {

    this.redirect('/new');
 } else{

  //TODO: this needs to change, since post list is in the sidebar
    this.render('posts_list');
 };
});


// LOGIN
Router.route('/login', {
   name: 'login',
   controller: 'LoginController'
});

// LIST POSTS LIST
Router.route('/posts', {
   name: 'posts_list',
   controller: 'PostsListController'
});

// NEW POST
Router.route('/new', {
   name: 'new_post',
   controller: 'NewPostController'
});


// SHOW POST
Router.route('/posts/:_id', {
   name: 'show_post',
   controller: 'ShowPostController'
});

// EDIT POST
Router.route('/posts/:_id/edit', {
   name: 'edit_post',
   controller: 'EditPostController'
});

// Search Results
Router.route('/search/:query', {
   name: 'search',
   controller: 'SearchController'
});


