// Template.new_post_button.events({
//   "click .new-post": function(event) {
//     event.preventDefault();

//     Router.go('new_post');

//     // TODO: also match authorID against current user
//     // also, check to match current user
//     // var new_post_for_current_user = Posts.findOne({ new_post: true, authorId: Meteor.userId() });
//     // console.log(new_post);

//     // if(new_post_for_current_user == null){
      
//     //   var postAttributes = {
//     //     new_post: true,
//     //     title: "New Post"
//     //   };

//     //   Meteor.call('newPost', postAttributes, function(error, result){
//     //     if (error){
//     //       alert(error.reason);
//     //     } else {
//     //       Router.go('edit_post', { _id: result._id });
//     //     };
//     //   });

//     // } else {
//     //   Router.go('edit_post', { _id: new_post._id });
//     // };
//   }
// });

