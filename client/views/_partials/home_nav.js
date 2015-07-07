Template.home_nav.events({
  "click .back-to-home": function (e,t) {
    e.preventDefault();
    if (!Session.get('hasContent') && Router.current().route.getName() === 'edit_post') {
      Meteor.call("deletePost", Router.current().params._id);
    };
    Router.go('home');
  }
});