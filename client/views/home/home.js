Template.home.events({
  "click .new-post": function(event) {
    event.preventDefault();
    Router.go('new_post');

  }
});
