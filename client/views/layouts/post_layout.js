// Template.post_layout.helpers({
// });

Template.post_layout.events({
  "click .back-to-home": function (e,t) {
    e.preventDefault();
    Router.go('home');
  }
});