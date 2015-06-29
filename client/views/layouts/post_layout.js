Template.post_layout.helpers({
  foo: function () {
    // ...
  }
});

Template.post_layout.events({
  "click .back-to-home": function (e,t) {
    e.preventDefault();
    Router.go('home');
  }
});