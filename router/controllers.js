HomeController = RouteController.extend({
  template:'home',
  action: function(){
    this.render();
  }
});
  
//    // 2. if the user has 1 or more posts, is there a post marked new post?  if so, redirec
//     hasPosts : function(){
//       var current_user_has_posts = Posts.find({authorId: Meteor.userId()}).count() === 0);
      
//       if (current_user_has_posts == null) {
//         return false;
//       } else {

//         var has_only_new_post = 
//         return true;
//       };
// }
//     // 1. does the current user have one or more posts?
//     if (Logd.posts.hasPosts) {

//       // does the user have only 1 post AND is it marked new?
//       var newPost = Posts.findOne({ new_post: true, authorId: Meteor.userId() });
//       if (newPost == null);

//       // if yes, redirect to that post
//       // else render homepage
//       this.render();
 
//     } else {

      


LoginController = RouteController.extend({
  layoutTemplate:'CenteredLayout',
  template:'login',
  action: function(){
    this.render();
  }
});

NewPostController = RouteController.extend({
  template:'new_post',
  action: function(){
    Session.set("newPost", true);
    Session.set('hasContent', false);
    this.render();
  }
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
  action: function(){
    this.render();
  }
});

PostsListController = RouteController.extend({
  template:'posts_list',
  action: function(){
    this.render();
  }
});

SearchController = RouteController.extend({
  template:'search',
  data: function() {
    return Posts.find({ tags: this.params.tags });
  },
  action: function(){
    Session.set("page_title", this.params.tags );
    this.render();
  }
});
