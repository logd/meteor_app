
// TODO: refactor this to be a postListController(?)
HomeController = RouteController.extend({
  template:'home',
  increment: 5,
  postsLimit: function() {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function() {
    return {sort: {updatedAt: -1}, limit: this.postsLimit() };
  },
  waitOn: function () {
    return Meteor.subscribe('posts');
  },
  posts: function() {
    return Posts.find({authorId: Meteor.userId()}, this.findOptions());
  },
  data: function () {
    var self = this;
    // var hasMore = this.posts().count() === this.postsLimit();
    var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});



    return { 
      posts: this.posts(),
      nextPath: function() {
        if(self.posts().count() === self.postsLimit()){
          return nextPath;
        }
      }
      // hasmore ? nextPath: null
    };
  },
  action: function(){
    this.render();
  },
  fastRender: true
});

LoginController = RouteController.extend({
  template:'login',
  action: function(){
    this.render();
  },
  fastRender: true
});


ShowPostController = RouteController.extend({
  template:'show_post',
  waitOn: function () {
    return Meteor.subscribe('posts', this.params._id); 
  },
  data: function() {
    return Posts.findOne({ _id: this.params._id });
  },
  action: function(){
    Session.set({
      "isEditing": false,
      "postHasContent":true
    });
    this.render();
  }
});

EditPostController = RouteController.extend({
  template:'edit_post',
  waitOn: function () {
    return Meteor.subscribe('posts', this.params._id);    
  },
  data: function() {
    return Posts.findOne({ _id: this.params._id });
  },
  // post: function() {
  //   return Posts.findOne({authorId: Meteor.userId()}, this.findOptions());
  // },
  action: function(){
    if (this.ready()) {
      Session.set("hasContent", true);
      this.render();
    } else {
      this.render('Loading');
    };
  }
});

TagsListController = RouteController.extend({
  template:'tags_list',
   waitOn: function () {
    return Meteor.subscribe('tags');    
  },
  data: function() {
    return Tags.find({ "authors.authorId": Meteor.userId() });
  },
  action: function(){
    this.render();
  }
});

TagMatchesController = RouteController.extend({
  template:'tag_matches',
  action: function(){
    Session.set("page_title", this.params.tag );
    this.render();
  }
});

SearchController = RouteController.extend({
  template:'search_results',
  data: function() {
    // return Posts.find({ tags: this.params.tags });
  },
  action: function(){
    // Session.set("page_title", this.params.tags );
    this.render();
  }
});

// IS THIS BEING USED?
// PostsListController = RouteController.extend({
//   template:'posts_list',
//   action: function(){
//     this.render();
//   }
// });
