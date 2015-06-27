// var logd_route_name;

// Template.AppLayout.onRendered(function(){
//   logd_route_name =  Router.current().route.getName();
//   // Session.set("route_name", Router.current().route.getName());
// });

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

      if(Router.current().route.getName() !== null){
        switch(Router.current().route.getName()){

          case "new_post":
            return "New post...";
            break;

          case "edit_post":
            var post = Posts.findOne({ _id: Router.current().params._id });
            // TODO: wait for post to be found before returning, else this may generate intermittent errors
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

      };
    }
});

Template.AppLayout.events({
  "click .app-nav-toggle button": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  },
  "click .done-editing" : function(e,t){
    e.preventDefault();

    var postContent = $('textarea.post-content').val();
    // console.log(postContent);

    // unless postContent is empty
    if(Logd.posts.notEmpty(postContent)){
      var postTags = Logd.tags.getHashTags(postContent);
      var postAttributes = {
        postId: Router.current().params._id,
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