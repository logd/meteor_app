 Meteor.startup(function () {
    console.log('startup...');
    console.log('options:', Avatar.options);
    console.log('url:', Avatar.getUrl());
  });

Meteor.publish("posts", function(){
  return Posts.find();
});

// Meteor.publish("tags", function(){
//   return Tags.find();
// });
