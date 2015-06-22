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
    this.render('postsList');
 };
});


// LOGIN
Router.route('/login', {
   name: 'login',
   controller: 'LoginController'
});

// NEW POST
Router.route('/new', {
   name: 'newPost',
   controller: 'NewPostController'
});

// POSTS LIST
Router.route('/posts', {
   name: 'postsList',
   controller: 'PostsListController'
});



Router.route('/posts/', { name: 'posts'});


// NEW POST
// Use Random.id([6]) while found in user ids
// Router.route('/new', { name: 'newPost'});


// POST DETAIL
// Router.route('/:token_id/:post_title', { name: 'postDetail'});

// // EDIT POST
// Router.route('/:token_id/:post_title/edit', { name: 'editPost'});

// // POSTS LIST - FILTERED
// Router.route('/:token_id/posts/sx-wizard', { name: 'postsListFiltered'});



