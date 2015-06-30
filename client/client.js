// "use strict";
// Meteor.startup(function() {
//    $('body').addClass('pushable');
// });

// $('.dropdown').dropdown({
//   // you can use any ui transition
//   transition: 'drop'
// });

Meteor.startup(function () {
  // Session.setDefault({
  //   "contentIsEmpty": false,
  //   "isEditing": false
  // })
});

Meteor.subscribe("posts");
Meteor.subscribe("tags");