Template.show_post.helpers({
  showPost: function() {
 return Posts.findOne(this.params._id);
    
  }

});