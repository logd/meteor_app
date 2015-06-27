Template.AppLayout.onCreated(function () {
  // this.isEditing = new ReactiveVar(false);

  // register this template within some central store
  // GalleryTemplates.push(this);
  // PostTemplates.push(this);

});

Template.AppLayout.helpers({
    isEditing: function() {
    return Session.get("isEditing");
  },
    postHasContent: function() {
    return Session.get("postHasContent");
  },
    isNewPost: function() {
      return Router.current().route.getName() === "new_post" ? true : false;
    },
     pageTitle: function() {

      //TODO: refactor this to be a Logd.setPageTitle function
      switch(Router.current().route.getName()){

        case "new_post":
          return "New post...";
          break;

        case "edit_post":
          var post = Posts.findOne({ _id: Router.current().params._id });
          return post.title;
          break;

        case "show_post":
          var post = Posts.findOne({ _id: Router.current().params._id });

          return post.title;
          break;

        default :
          return "Logd";
          break;
      }
    }
});

Template.AppLayout.events({
  "click .app-nav-toggle button": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  },
  "click .done-editing" : function(e,t){
    e.preventDefault();

    var postContent = $('#postContent').val();

    // unless postContent is empty
    if(!Logd.posts.postIsEmpty(postContent)){

      var postTitle = Logd.posts.postTitleFromFirstLine(postContent);
      var postTags = Logd.tags.getHashTags(postContent);
      var postAttributes = {
        postId: Router.current().params._id,
        title: postTitle,
        content: postContent,
        tags: postTags 
      };

      Meteor.call('updatePost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Router.go('show_post', { _id: Router.current().params._id });
        };
      });         
    };
  }
  // ,
  // "click .post-content-button": function(e,t){
  //  e.preventDefault();
  //   Router.go('edit_post', {_id: Router.current().params._id });
  // }
  , "click .edit": function(e,t){
   e.preventDefault();
    Router.go('edit_post', {_id: Router.current().params._id });
  },
    "click .delete": function() {
    e.preventDefault();
    if (confirm("Are you sure?")) {
       Meteor.call("deletePost", Router.current().params._id);
        Router.go('new_post');
    }
  }
});