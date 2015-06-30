HomeController = RouteController.extend({
  template:'home',
  action: function(){
    if (Posts.find( { authorId : Meteor.userId() } ).count() === 0) {
      this.redirect('/new');

    } else {

      this.render();
    }
  }
});

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
    this.state.set('newPost', true);
    this.state.set('editPostTitle', true);
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

    if(Session.get('editingPostTitle') === false){
      Session.set('editingPostContent', true);
    } else {
      Session.set('editingPostTitle', true);
    }
    // this.state.set('postTitleHasContent', true);
    // this.state.set('editingPostContent', true);
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
