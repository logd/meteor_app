Meteor.publish("posts", function(){
  var currentUserId = this.userId;
  Counts.publish(this, 'posts-counter', Posts.find({authorId: currentUserId }));
  
  return Posts.find({authorId: currentUserId });
});

Meteor.publish("tags", function(){
  return Tags.find();
});

// TODO: Only publish tags for this author:
/// return Tags.find({authors: Meteor.userId() }); 

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find( {_id: this.userId},
      {fields: 
        {
          "services.google.picture": true,
          "services.google.name": true
        }
      });
  } else {
    this.ready();
  }
});