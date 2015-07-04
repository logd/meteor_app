Template.new_post.helpers({
  // postTitleHasContent: function() {
  //   return Session.get('postTitleHasContent');
  // }
});


Template.new_post.events({
  "submit form": function(event) {
    event.preventDefault();
    console.log("Form submitted");
    return false;
  },
  "click .done-button": function(){
    var postTitle = $('.post-title').val();
    console.log(postTitle);   
    var postTags = Logd.tags.getHashTags(postTitle);
     
    var postAttributes = {
      title: postTitle,
      tags: postTags
    };

    Meteor.call('postInsert', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
        Router.go('edit_post', { _id: result._id });
      }
    });
  }
});

