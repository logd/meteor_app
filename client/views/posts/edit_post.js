Template.edit_post.onRendered(function(){
    // $('.autosize').autosize();
   this.$('#post_content').focus();
});

Template.edit_post.helpers({
  editingPostTitle: function() {
    return Session.get('editingPostTitle');
  },
  editingPostContent: function() {
    return Session.get('editingPostContent');
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

    // if editing post content, then update that first
    if (Session.get('editingPostContent')){
      var postContent = $('#post-content').val();
      var postTags = Logd.tags.getHashTags(postContent);

      var postAttributes = {
        postId: Router.current().params._id,
        content: postContent,
        tags: postTags
      };

      Meteor.call('updatePostContent', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
        
         Session.set('editingPostContent', false);
         Session.set('editingPostTitle', true);
        };
      });

    } else {
        
        Session.set('editingPostContent', false);
        Session.set('editingPostTitle', true);
    }
  },
    "click .edit-post-content": function(e,t){
    e.preventDefault();

    // if editing post title, then update that first
    if (Session.get('editingPostTitle')){
      var postTitle = $('#post-title').val();
      console.log(postTitle);
      var postTags = Logd.tags.getHashTags(postTitle);
    
      var postAttributes = {
        postId: Router.current().params._id,
        title: postTitle,
        tags: postTags
      };

      Meteor.call('updatePostTitle', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
        
         Session.set('editingPostTitle', false);
         Session.set('editingPostContent', true);
         
        };
      }); 
    } else {
        
          Session.set('editingPostTitle', false);
         Session.set('editingPostContent', true);
    }
  
    
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    console.log('clicked done editing');
    var postTitle = $('#post-title').val() || this.title;
    var postContent = $('#post-content').val() || this.content || "";

    console.log(postTitle);
    console.log(postContent);

    // //TODO: check if postTitle or postContent are empty
    //   // (postContent can be empty)
    //   // if postTitle is empty AND postContent is empty: 1) rename to "empty post"
    //   // if postTitle is empty but not postContent:
    //   // move first line from content to title
 
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

