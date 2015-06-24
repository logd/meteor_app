Router.onBeforeAction(function () {
// all properties available in the route function are also available here such as this.params


// if not signed in and not currently at /login, redirect to/login
  if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
    this.redirect('login');
  } else {
    // otherwise continue
    this.next();
  }
});


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


EditPostController = RouteController.extend({
  template:'edit_post',
  data: function() {
    return Posts.findOne(this.params._id);
  },
  action: function(){
    this.render();
  }
});

// EDIT POST
Router.route('/posts/:_id/edit', {
   name: 'edit_post',
   controller: 'EditPostController'
});


