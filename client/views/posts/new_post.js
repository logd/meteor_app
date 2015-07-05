Template.new_post.events({
  "click .new-post": function(event) {
    event.preventDefault();

    // TODO: also match authorID against current user
    var new_post = Posts.findOne({ new_post: true });
    console.log(new_post);

    if(new_post == null){
      
      var postAttributes = {
        new_post: true,
        title: "New Post"
      };

      Meteor.call('newPost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Router.go('edit_post', { _id: result._id });
        };
      });

    } else {
      Router.go('edit_post', { _id: new_post._id });
    };
  }
});

