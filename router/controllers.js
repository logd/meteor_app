// ApplicationController = RouteController.extend({
//   layoutTemplate:'ApplicationLayout',
//   template:'AppLayout',
//   action: function(){
//     this.render();
//   }
// });

// Router.onBeforeAction('dataNotFound', {only: 'show_post'});

LoginController = RouteController.extend({
  layoutTemplate:'UtilityLayout',
  template:'login',
  action: function(){
    this.render();
  }
});

NewPostController = RouteController.extend({
  layoutTemplate:'AppLayout',
  template:'new_post',
  action: function(){
    Session.set({
      "newPost": true,
      "isEditing": true,
      "postHasContent":false
    });
    this.render();
  }
});

PostTitleController = RouteController.extend({
  layoutTemplate:'PostLayout',
  template:'post_title',
  action: function(){
    Session.set({
      "newPost": true,
      "isEditing": true,
      "postHasContent":false
    });
    this.render();
  }
});

PostsListController = RouteController.extend({
  template:'posts_list',
  action: function(){
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
    // this.state.set('pageTitle', 'edit_post');
    Session.set({
      "isEditing": true,
      "postHasContent":true
  });
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

// need to pass the params through here?
// ShowPostController = RouteController.extend({
//   layoutTemplate:'AppLayout',
//   template:'show_post',
//   data: function() {
//     return Posts.findOne(this.params._id);
//   },
//   action: function(){
//     this.render();
//   }
// });
