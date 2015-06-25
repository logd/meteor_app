// Template.edit_post.onRendered(function(){
//     $('.autosize').autosize();
// });

Template.edit_post.helpers({
  editPost: function() {
    return Posts.findOne(this.params._id);
  }
});

Template.edit_post.events({
  "keyup .post-form" : function(){
    var postContent = event.target.value;
    
  }
});
 

