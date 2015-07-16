Meteor.publish("posts", function(){
  var currentUserId = this.userId;
  Counts.publish(this, 'posts-counter', Posts.find({authorId: currentUserId }));
  
  return Posts.find({authorId: currentUserId });
});


// based on http://docs.meteor.com/#/full/meteor_publish
// Meteor.publish("posts-count", function(currentUserId){
//   var self = this;
//   // var currentUserId = this.userId;
//   // check(authorId, String);
//   var count = 0;
//   var initializing = true;

//   var handle = Posts.find({ authorId:currentUserId}).observeChanges({
//     added: function(id) {
//       count++;
//       if(!initializing)
//         self.changed("counts", authorId, {count: count });
//     },
//     removed: function(id){
//       count--;
//       self.changed("counts", authorId, {count: count });
//     }
//   });

//   // send a self added message after observeChanges returns, then mark subscription as ready
//   initializing = false;
//   self.added("counts", authorId, {count: count});
//   self.ready();

//   // stop observing when client unsubs
//   // stopping sub auto-sends removed messages
//   self.onStop(function(){
//     handle.stop();
//   });
// });

// Counts.allow({
//   insert: function(userId, doc){
//     return !! userId;
//   },
//     update: function(userId, doc){
//     return !! userId;
//   },
//     remove: function(userId, doc){
//     return !! userId;
//   }

// });

// Meteor.methods({
//   myTotalPostCount: function(){
//     var currentUserId = this.userId;
//     var totalCount = Posts.find({authorId: currentUserId }).count();
//     console.log(totalCount);
//     return totalCount;
   
//   }
// });

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

// Meteor.publish('posts', function(){
 
// });
// TODO: Only publish posts by this author


// ServiceConfiguration.configurations.upsert(
//   { service: "google" },
//   {
//     $set: {
//       loginStyle: "redirect"
//     }
//   }
// );



// Manage has_new_post variable
// Accounts.onCreateUser(function(options, user) {

//  if (user.profile == undefined){
//   user.profile = {};
//   user.profile.new_post = false;

//  } else {
//     user.profile.new_post = false;
//  }
//     // _.extend(user.profile, { new_post : false });


//     // user.profile['new_post'] = false;
//     return user;
// });
// Manage has_new_post variable
// Accounts.onLogin(function(user) {
//   if (user.profile == undefined) user.profile = {};
//     _.extend(user.profile, { new_post : false });
// });
