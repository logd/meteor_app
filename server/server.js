Meteor.publish("posts", function(){
  return Posts.find();
});


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
