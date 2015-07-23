LogdPosts = {
  createPost: function(tags){

     var postAttributes = {
        title: "New Post",
        newPost: true
      };

      Meteor.call('createPost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Session.set("hasContent", false);
          Logd.posts.setPostTitle(result._id,result.title);

          Router.go('edit_post', {_id: result._id});
        };
      });

  }
}