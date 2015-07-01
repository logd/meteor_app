Template.show_post.helpers({
  truncatedTitle: function() {
    return Logd.posts.truncateTitle(this.title);
  }
});
