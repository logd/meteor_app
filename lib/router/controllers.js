HomeController = RouteController.extend({
  template:'home',
  action: function(){
    this.render();
  },
  fastRender: true
});

LoginController = RouteController.extend({
  layoutTemplate:'centered_layout',
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
