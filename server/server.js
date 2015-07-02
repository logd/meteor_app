 Meteor.startup(function () {
    console.log('startup...');
    console.log('options:', Avatar.options);
    console.log('url:', Avatar.getUrl());
  });

Meteor.publish("posts", function(){
  return Posts.find();
});


Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find( {_id: this.userId},
      {fields: 
        {
          "services.google.picture": true
        }
      });
  } else {
    this.ready();
  }
});

// Meteor.publish("tags", function(){
//   return Tags.find();
// });
