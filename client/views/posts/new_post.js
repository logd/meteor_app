Template.new_post.helpers({
  // postTitleHasContent: function() {
  //   return Iron.controller().state.get('postTitleHasContent');
  // }
  // ,
  // editPostTitle: function(){
  //   return Iron.controller().state.get('editPostTitle');
  // }
});

Template.new_post.events({
  // "keyup .has-content": function(e,t){
  //   e.preventDefault();
  //   var postTitle = e.target.value;

  //   if(Logd.posts.notEmpty(postTitle)){
  //     Iron.controller().state.set('postTitleHasContent', true);
  //   } else {
  //     Iron.controller().state.set('postTitleHasContent', false);
  //   };
  // }
  // ,
  "keyup .create-post": function(e,t){
    e.preventDefault();
    var postTitle = $('#post-form textarea').val();
    // var postTitle = e.target.value;
    var code = e.keyCode || e.which;
    
   if(code === 13 && Logd.posts.notEmpty(postTitle)){
     var postTags = Logd.tags.getHashTags(postTitle);
     console.log("tags: " + postTags);
  
    var postAttributes = {
      title: postTitle,
      tags: postTags
    };

    Meteor.call('postInsert', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
         console.log(result._id); 
        // Iron.controller().state.set('editPostTitle', false);
        // Iron.controller().state.set('postHasContent', false);
        Router.go('edit_post', { _id: result._id });
      }
    });
   }
  }
});
 

