Template.show_post.helpers({
  truncatedTitle: function() {
    return Logd.posts.truncateTitle(this.title);
  }
});

Template.show_post.events({
  "click .post-content, click .edit-post": function(e,t){
    Router.go('edit_post', {_id: Router.current().params._id});
  }
});
