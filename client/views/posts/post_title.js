// Template.post_title.onRendered(function(){
//     // $('.autosize').autosize();

//    // this.$('.post-title').focus();

//     // if(input){
//     //     input.focus()
//     // }
// });

Template.post_title.helpers({
  postTitleHasContent: function() {
    return Iron.controller().state.get('postTitleHasContent');
  },
  editPostTitle: function(){
    return Iron.controller().state.get('editPostTitle');
  }
});

// Template.post_title.events({
//   "input .show-done": function(e,t){
//     e.preventDefault();
//     var postTitle = e.target.value;

//     if(Logd.posts.notEmpty(postTitle)){
//       Iron.controller().state.set('postTitleHasContent', true);
//     } else {
//       Iron.controller().state.set('postTitleHasContent', false);
//     };
//   },
//   "keyup .create-post": function(e,t){
//     e.preventDefault();
//     var postTitle = e.target.value;
//     console.log(postTitle);
//     var code = e.keyCode || e.which;
    
//    if(e.which === 13){
//     e.preventDefault();

//     console.log("you hit return");

//     // var postTags = Logd.tags.getHashTags(postTitle);
  
//     // var postAttributes = {
//     //   title: postTitle,
//     //   tags: postTags
//     // };

    

//     // Meteor.call('postInsert', postAttributes, function(error, result){
//     //   if (error){
//     //     alert(error.reason);
//     //   } else {
//     //     Iron.controller().state.set('editPostTitle', false);
//     //     Iron.controller().state.set('postHasContent', false);
//     //     Router.go('edit_post', { _id: result._id });
//     //   }
//     // });
//    }
//   }
// });
 

