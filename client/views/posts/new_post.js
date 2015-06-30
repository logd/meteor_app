Template.new_post.onRendered(function(){
    // $('.autosize').autosize();

   this.$('.post-title').focus();

    // if(input){
    //     input.focus()
    // }
});

Template.new_post.helpers({
  postTitleHasContent: function() {
    return Session.get('postTitleHasContent');
  }
  // ,
  // editPostTitle: function(){
  //   return Session.get('editPostTitle');
  // }
});

Template.new_post.events({
  "keyup .has-content": function(e,t){
    e.preventDefault();
    var postTitle = e.target.value;

    if(Logd.posts.notEmpty(postTitle)){
      Session.set('postTitleHasContent', true);
    } else {
      Session.set('postTitleHasContent', false);
    };
  }
  ,
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
        // Iron.controller().state.set('editPostTitle', false);
        // Iron.controller().state.set('postHasContent', false);
        Router.go('edit_post', { _id: result._id });
      }
    });
   }
  },
  "click .click-create-post": function(e,t){
    e.preventDefault();
    var postTitle = $('#post-title').val();    
     var postTags = Logd.tags.getHashTags(postTitle);
     
    var postAttributes = {
      title: postTitle,
      tags: postTags
    };

    Meteor.call('postInsert', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
        Router.go('edit_post', { _id: result._id });
      }
    });
   
  }
});
 

