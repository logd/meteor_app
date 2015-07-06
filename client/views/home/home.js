Template.home.events({
  "click .new-post": function(event) {
    event.preventDefault();
    
     var postAttributes = {
        title: "New Post"
      };

      Meteor.call('createPost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Session.set("hasContent", false);
          Router.go('edit_post', {_id: result._id});
        };
      });
  }
});
