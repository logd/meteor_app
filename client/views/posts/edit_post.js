Template.edit_post.onRendered(function(){
    // $('.autosize').autosize();

   this.$('.post-content').focus();

    // if(input){
    //     input.focus()
    // }
});

Template.edit_post.helpers({
  editingPostTitle: function() {
    return Iron.controller().state.get('editingPostTitle');
  },
  editingPostContent: function() {
    return Iron.controller().state.get('editingPostContent');
  },
  
  // postHasContent: function() {
  //   return Iron.controller().state.get('postHasContent');
  // },
  // postContent: function() {
  //   return this.find('#post-form .post-content').value;
  // }
  // ,
  // showDone: function() {
  //   if( Iron.controller().state.get('postTitleHasContent') ||
  //       Iron.controller().state.get('postHasContent') ) {
  //       return true;
  //   } else {
  //       return false;
  //   };
  // },
  // showEdit: function() {
  //   if(Router.current().route.getName() === 'show_post') {
  //       return true;
  //   } else {
  //       return false;
  //   };
  // }
});

Template.edit_post.events({
  "click .edit-post-title": function(e,t){
    e.preventDefault();
     Iron.controller().state.set('editingPostContent', false);
     Iron.controller().state.set('editingPostTitle', true);
    
  },
    "click .edit-post-content": function(e,t){
    e.preventDefault();
     Iron.controller().state.set('editingPostContent', true);
     Iron.controller().state.set('editingPostTitle', false);
    
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    var postTitle = $('#post-title').val();
    var postContent = $('#post-content').val()  || this.content;

    console.log(postTitle);

    //TODO: check if postTitle or postContent are empty
      // (postContent can be empty)
      // if postTitle is empty AND postContent is empty: 1) rename to "empty post"
      // if postTitle is empty but not postContent:
      // move first line from content to title
 
      var postTitleTags = Logd.tags.getHashTags(postTitle);
      var postContentTags = Logd.tags.getHashTags(postContent);
      var postTags = postTitleTags.concat(postContentTags);

      var postAttributes = {
        postId: Router.current().params._id,
        title: postTitle,
        content: postContent,
        tags: postTags 
      };

      Meteor.call('updatePost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Router.go('show_post', { _id: Router.current().params._id });
        };
      });  
  }
});


// Template.edit_post.events({
//   "keyup .update-post-content": function(e,t){
//     e.preventDefault();
//     var postContent = event.target.value;
//     // console.log(postContent);
  
//     // on return, if post is not empty, create post and go to edit post view
//     if(event.which === 13){
//       var postTags = Logd.tags.getHashTags(postContent);
    
//       var postAttributes = {
//         content: postContent,
//         tags: postTags
//       };

//       Meteor.call('postInsert', postAttributes, function(error, result){
//         if (error){
//           alert(error.reason);
//         } else {
//            Router.go('edit_post', { _id: result._id });
//         }
//       });
//     }
//   }
// });

