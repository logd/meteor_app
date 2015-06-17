Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
    // if the user is not logged in, render the Login template
    // this.render('login');
    this.redirect('login');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});

LoginController = RouteController.extend({
  layoutTemplate:'UtilityLayout',
  template:'login',
  action: function(){
    this.render();
  }
});


Router.route('/', function() {

 // if (!Meteor.userId()) {
 //   // this.redirect('/login');

 // } else 

 if (Posts.find( { _id:Meteor.userId() } ).count() === 0) {
    this.redirect('/new');

 } else{
    this.render('postsList');
 };
 

});


// LOGIN
// Will this be needed
Router.route('/login', {
   name: 'login',
   controller: 'LoginController'
});


// NEW POST
// Use Random.id([6]) while found in user ids
Router.route('/new', { name: 'newPost'});


// POST DETAIL
Router.route('/:token_id/:post_title', { name: 'postDetail'});

// EDIT POST
Router.route('/:token_id/:post_title/edit', { name: 'editPost'});

// POSTS LIST
Router.route('/:token_id/posts/', { name: 'posts'});

// POSTS LIST - FILTERED
Router.route('/:token_id/posts/sx-wizard', { name: 'postsListFiltered'});



