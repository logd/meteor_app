Meteor.startup(function () {
  Session.setDefault({
    "disableCreate": false
  });
});

Meteor.subscribe("posts");
Meteor.subscribe("tags");
Meteor.subscribe("userData");
