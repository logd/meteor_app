Template.post_title.onRendered(function(){
    // $('.autosize').autosize();

   // this.$('.post-title').focus();

    // if(input){
    //     input.focus()
    // }
});

Template.post_title.helpers({
  editPostTitle: function(){
    return Iron.controller().state.get('editPostTitle');
  }
});

Template.post_title.events({
  "keyup .post-title": function(e,t){
    e.preventDefault();
    var postTitle = event.target.value;

    // check if post title has content
    if(Logd.posts.notEmpty(postTitle)){
      Iron.controller().state.set('postTitleHasContent', true);
    } else {
      return Iron.controller().state.set('postTitleHasContent', false);
    };
 
    // on typing return/enter key create post and go to edit post view
    if(event.which === 13){
      var postTags = Logd.tags.getHashTags(postTitle);
    
      var postAttributes = {
        title: postTitle,
        tags: postTags
        // ,
        // content: postContent,
        // tags: postTags 
      };

      Meteor.call('postInsert', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Iron.controller().state.set('editPostTitle', false);
          Iron.controller().state.set('postHasContent', false);
          Router.go('edit_post', { _id: result._id });
        }
      });
    }
  }
});
 

