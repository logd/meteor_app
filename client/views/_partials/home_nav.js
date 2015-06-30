Template.home_nav.events({
  "click .back-to-home": function (e,t) {
    e.preventDefault();
    Router.go('home');
  }
});