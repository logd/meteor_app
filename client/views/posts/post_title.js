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
  "input .submit-post": function(e,t){
    e.preventDefault();
    var postTitle = e.target.value;
    var code = e.keyCode || e.which;
    
   if(code === 13 && Logd.posts.notEmpty(postTitle)){

    // var postTags = Logd.tags.getHashTags(postTitle);
  
    // var postAttributes = {
    //   title: postTitle,
    //   tags: postTags
    // };

    console.log("you hit return");

    // Meteor.call('postInsert', postAttributes, function(error, result){
    //   if (error){
    //     alert(error.reason);
    //   } else {
    //     Iron.controller().state.set('editPostTitle', false);
    //     Iron.controller().state.set('postHasContent', false);
    //     Router.go('edit_post', { _id: result._id });
    //   }
    // });
  }

  },
  "input .show-done": function(e,t){
    e.preventDefault();
    var postTitle = event.target.value;

    if(Logd.posts.notEmpty(postTitle)){
      Iron.controller().state.set('postTitleHasContent', true);
    } else {
      Iron.controller().state.set('postTitleHasContent', false);
    };
  }
});
 

