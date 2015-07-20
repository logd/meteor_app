Meteor.startup(function () {
  Session.setDefault({
    "disableCreate": false,
    "displaySaveNotice": false
  });
  // postInfo = new ReactiveDict('postDict');
});

Meteor.subscribe("posts");
Meteor.subscribe("tags");
Meteor.subscribe("userData");
