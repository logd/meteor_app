// Template.edit_post.onRendered(function(){
//     $('.autosize').autosize();
// });

Template.edit_post.helpers({
  editPost: function() {
    return Posts.findOne(this.params._id);
  },
  postIsEmpty: function() {
    if(postContent.trim() === null || postContent.trim() === ""){
        Session.set("postHasContent", false);
        return true;

      } else {
        Session.set("postHasContent", true);
        return false;
      };
  }
});

Template.edit_post.events({
  "keyup .post-form" : function(){
    var postContent = event.target.value;

    //
    // edit icon should switch to done icon
    // want to support all the same functionality as for new post here, except the Meteor call will be to upsert
    // do I want to explore

  }
});
 

