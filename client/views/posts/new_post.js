// Template.new_post.onRendered(function(){
//    this.$('.post-content').focus();
// });

// Template.new_post.helpers({
//   hasContent: function() {
//     return Session.get('hasContent');
//   }
//   // ,
//   // truncatedTitle: function() {
//   //   return Logd.posts.truncateTitle(this.title);
//   // }
// });

// Template.new_post.events({
//   "click .create-post": function(e,t){
//     e.preventDefault();
//     Router.go('show_post', { _id: Router.current().params._id }); 
//   },
//   "keyup .create-on-return": function(e,t){
    

//     if(e.which === 13){
//       var postContent = e.target.value;
//       var postTitle = Logd.posts.getFirstLine(postContent);
//       var postTags = Logd.tags.getHashTags(postContent);

//       var postAttributes = {
//         title: postTitle,
//         content: postContent,
//         tags: postTags
//       };

//       Meteor.call('createPost', postAttributes, function(error, result){

//         if (error){
//           alert(error.reason);
//         }  else {
//            Router.go('edit_post', { _id: result._id });
//         }

//       });
//     };
//   }
// });


    

      