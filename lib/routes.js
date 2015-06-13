Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {

    // TODO: this subscribes to posts for every route.  limit what is subscribed to in the future
    return Meteor.subscribe('posts');
  }
});


// HOMEPAGE
// rename route to homepage?
Router.route('/', { name: 'postsList' });


// NEW POST
// Use Random.id([6]) while found in user ids
Router.route('/:token_id/new', { name: 'newPost'});

// LOGIN
// Will this be needed
Router.route('/login', { name: 'login'});

// POST DETAIL
Router.route('/:token_id/:post_title', { name: 'postDetail'});

// EDIT POST
Router.route('/:token_id/:post_title/edit', { name: 'editPost'});

// POSTS LIST
Router.route('/:token_id/posts/', { name: 'posts'});

// POSTS LIST - FILTERED
Router.route('/:token_id/posts/sx-wizard', { name: 'postsListFiltered'});



