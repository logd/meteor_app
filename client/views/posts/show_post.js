Template.show_post.helpers({
  showPost: function() {
    return Session.set("isEditing", false);
    return Posts.findOne(this.params._id);
  },
  postTitle: function() {
    // display post Title in header
  }

});