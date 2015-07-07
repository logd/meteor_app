Template.create_post.helpers({
  disableCreate: function(){
    if (Session.get("disableCreate")) {
      return "disabled";
    } else{
       return "";
    };
  }
});

Template.create_post.events({
  "submit .create-post": function(event) {
    event.preventDefault();
    Session.set("disableCreate", true);
  
      var postAttributes = {
        title: "New Post"
      };

      Meteor.call('createPost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Session.set("hasContent", false);
          Router.go('edit_post', {_id: result._id});
          Session.set("disableCreate", false);
        };
      });
    // };     
  }
});
