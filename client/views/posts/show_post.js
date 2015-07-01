Template.show_post.helpers({
  truncatedTitle: function() {
    if(this.title.length > 20) {
      return this.title.substr(0, 19);
    } else {
      return false;
    };
  }
});
