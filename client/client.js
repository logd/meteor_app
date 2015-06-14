Meteor.startup(function() {
   $('body').addClass('pushable');
});

  $('.dropdown').dropdown({
    // you can use any ui transition
    transition: 'drop'
  });

Meteor.subscribe("posts");
Meteor.subscribe("tags");