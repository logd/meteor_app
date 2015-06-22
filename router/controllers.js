LoginController = RouteController.extend({
  layoutTemplate:'UtilityLayout',
  template:'login',
  action: function(){
    this.render();
  }
});

NewPostController = RouteController.extend({
  layoutTemplate:'PostLayout',
  template:'newPost',
  action: function(){
    this.render();
  }
});

PostsListController = RouteController.extend({
  template:'postsList',
  action: function(){
    this.render();
  }
});

// need to pass the params through here?
ShowPostController = RouteController.extend({
  layoutTemplate:'PostLayout',
  template:'show_post',
  data: function() {
    return Posts.findOne(this.params._id);
  },
  action: function(){
    this.render();
  }
});
