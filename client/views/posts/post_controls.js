Template.post_controls.helpers({
  showDone: function() {
    if( Iron.controller().state.get('postTitleHasContent') ||
        Iron.controller().state.get('postHasContent') ) {
        return true;
    } else {
        return false;
    };
  },
  showEdit: function() {
    if(Router.current().route.getName() === 'show_post') {
        return true;
    } else {
        return false;
    };
  }
});


Template.post_controls.events({
  "click .edit-post": function(e,t){
    Router.go('edit_post', { _id: Router.current().params._id });
  },
    "click .done-editing": function(e,t){
      var postTitle = Template.edit_post.postTitle;
      // var postContent = $('.post-content').val();

      console.log(postTitle);

      
   

      
    }
});

  //   // unless postContent is empty
  //   if(Logd.posts.notEmpty(postContent)){
  //     var postTags = Logd.tags.getHashTags(postContent);
  //     var postAttributes = {
  //       postId: Router.current().params._id,
  //       content: postContent,
  //       tags: postTags 
  //     };

  //     Meteor.call('updatePost', postAttributes, function(error, result){
  //       if (error){
  //         alert(error.reason);
  //       } else {
  //         Router.go('show_post', { _id: Router.current().params._id });
  //       };
  //     });         
  //   };

  //     };
  // }


  // "keyup .post-form": function(e,t){
  //   e.preventDefault();
  //   var postContent = event.target.value;
  
  //   // on return, if post is not empty, create post and go to edit post view
  //   if(event.which === 13){
  //     var postTitle = Logd.posts.getTitleFromContent(postContent).title;
  //     var postTags = Logd.tags.getHashTags(postTitle);

  //     // postContent = Logd.posts.getTitleFromContent(postContent).content;

    
  //     var postAttributes = {
  //       title: postTitle,
  //       tags: postTags
  //       // ,
  //       // content: postContent,
  //       // tags: postTags 
  //     };

  //     Meteor.call('postInsert', postAttributes, function(error, result){
  //       if (error){
  //         alert(error.reason);
  //       } else {
  //          Router.go('edit_post', { _id: result._id });
  //       }
  //     });
  //   }
  // }

