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

// HOMEPAGE
// rename route to homepage?
// after adding a controller: Router.route('/', { controller: 'HomeController' });
// can then also switched to named routes:
Router.route('/', { name: 'home' });


// LOGIN
// Will this be needed
Router.route('/login', function(){
   this.render('login');
});


// NEW POST
// Use Random.id([6]) while found in user ids
Router.route('/:token_id/new', { name: 'newPost'});


// POST DETAIL
Router.route('/:token_id/:post_title', { name: 'postDetail'});

// EDIT POST
Router.route('/:token_id/:post_title/edit', { name: 'editPost'});

// POSTS LIST
Router.route('/:token_id/posts/', { name: 'posts'});

// POSTS LIST - FILTERED
Router.route('/:token_id/posts/sx-wizard', { name: 'postsListFiltered'});



