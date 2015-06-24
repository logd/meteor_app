Template.show_post.events({
  // showPost: function() {
  //   return Session.set("isEditing", false);
  //   return Posts.findOne(this.params._id);
  // },
  // postTitle: function() {
  //   // display post Title in header
  // }
  "click .post-content": function(e,t){
    Session.set({
      "isEditing": true,
      "postHasContent":true
    });
    Router.go('edit_post', {_id: Router.current().params._id });
  }
});