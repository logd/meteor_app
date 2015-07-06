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

          Router.go('edit_post', {_id: result._id});
        };
      });
  }
  // ,
  // "click .create-post": function(event) {
  //  event.preventDefault();

  //   Meteor.user().profile.new_post = true;

  //   var postAttributes = {
  //       title: "New Post"
  //   };

  //   Meteor.call('createPost', postAttributes, function(error, result){
  //       if (error){
  //         alert(error.reason);
  //       } else {
  //         Router.go('edit_post', { _id: result._id });
  //       };
  //   });

  // }
});
