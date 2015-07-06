Template.edit_post.onRendered(function(){
   this.$('.post-content').click();
   this.$('.post-content').focus();
});

Template.edit_post.helpers({
  showDone: function() {
    return Session.get("hasContent");
  }
});

Template.edit_post.events({
  "click .done-editing": function(e,t){
    e.preventDefault();
    Router.go('show_post', { _id: Router.current().params._id }); 
  }
});
