Template.show_post.events({
  "click .post-content": function(){
    Router.go('edit_post', {_id: Router.current().params._id});
  }
});
