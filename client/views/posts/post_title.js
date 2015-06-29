Template.post_title.onRendered(function(){
    // $('.autosize').autosize();

   // this.$('.post-title').focus();

    // if(input){
    //     input.focus()
    // }
});

Template.post_title.helpers({
  editPostTitle: function(){
    var controller = Iron.controller();

    // reactively return the value of postId
    return controller.state.get('editPostTitle');
  }
});

Template.post_title.events({
  "keyup .post-title": function(e,t){
    e.preventDefault();
    var postTitle = event.target.value;

    if(Logd.posts.notEmpty(postTitle)){
       return Iron.controller().state.set('postTitleHasContent', true);
    } else {
      return Iron.controller().state.set('postTitleHasContent', false);
    }
    // console.log(postContent);
  
    // // on return, if post is not empty, create post and go to edit post view
    // if(event.which === 13){
    //   var postTitle = Logd.posts.getTitleFromContent(postContent).title;
    //   var postTags = Logd.tags.getHashTags(postTitle);

    //   // postContent = Logd.posts.getTitleFromContent(postContent).content;

    
    //   var postAttributes = {
    //     title: postTitle,
    //     tags: postTags
    //     // ,
    //     // content: postContent,
    //     // tags: postTags 
    //   };

    //   Meteor.call('postInsert', postAttributes, function(error, result){
    //     if (error){
    //       alert(error.reason);
    //     } else {
    //        Router.go('edit_post', { _id: result._id });
    //     }
    //   });
    // }
  }
});
 

