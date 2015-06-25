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
  data: function() {
    return Posts.findOne(this.params._id);
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
  data: function() {
    return Posts.findOne(this.params._id);
  },
  action: function(){
    Session.set({
      "isEditing": true,
      "postHasContent":true
    });
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
