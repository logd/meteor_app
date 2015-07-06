HomeController = RouteController.extend({
  template:'home',
  action: function(){
    this.render();
  }
});

// Iron.Router.hooks.createPost = function () {

//   var new_post_id = null;

//   if (Session.get("newPost")){
//     var postAttributes = {
//       title: "New Post"
//     };

//     Meteor.call('createPost', postAttributes, function(error, result){
//       if (error){
//         alert(error.reason);
//       } else {
//          new_post_id = result._id;
//       };
//     });
//   };

//   console.log("New post id: " + new_post_id);

//   if(new_post_id !== null){
//     this.params._id = new_post_id;
//   }

//   this.next();
// };
 
// Router.onBeforeAction(createPost, {
//   only: ['edit_post']
//   // or except: ['routeOne', 'routeTwo']
// });
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
    
  // CURRENTLY NOT IN USE  
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

Router.route('/post/:_id', function () {
  // add the subscription handle to our waitlist
  this.wait(Meteor.subscribe('item', this.params._id));

  // this.ready() is true if all items in the wait list are ready

  if (this.ready()) {
    this.render();
  } else {
    this.render('Loading');
  }
});

EditPostController = RouteController.extend({
  template:'edit_post'
  // ,
  // onBeforeAction: function (){
  //     console.log("New post id: " + new_post_id);
  //     this.params._id = new_post_id;
  //     this.next();
  // }
  ,
  waitOn: function () {
    // if (Session.get("newPost")){
    //   var new_post_id = Logd.posts.createPost();
    //   return Meteor.subscribe('posts',new_post_id);
    // } else {
      return Meteor.subscribe('posts', this.params._id);
    // };     
  },
  data: function() {
    //  if (Session.get("newPost")){
    //   return Posts.findOne({ _id: new_post_id });
    // } else {
       return Posts.findOne({ _id: this.params._id });
    // };
   
  },
  action: function(){
    if (this.ready()) {
      this.render();
    } else {
      this.render('Loading');
    };
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
