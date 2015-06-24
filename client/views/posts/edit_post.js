// Template.edit_post.onRendered(function(){
//     $('.autosize').autosize();
// });

Template.edit_post.helpers({
  editPost: function() {
    return Session.set("isEditing", true);
    return Posts.findOne(this.params._id);
  }
});

// Template.edit_post.events({
// });
 

