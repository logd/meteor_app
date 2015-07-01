Template.new_post.onRendered(function(){
  // $('.autosize').autosize();
  this.$('.post-title').focus();
});

Template.new_post.helpers({
  postTitleHasContent: function() {
    return Session.get('postTitleHasContent');
  }
});


Template.new_post.events({
  "submit form": function(event) {
    event.preventDefault();
    console.log("Form submitted");
    return false;
  },
    "keyup .has-content": function(){
    // event.preventDefault();
    var postTitle = event.target.value;

    if(Logd.posts.notEmpty(postTitle)){
      Session.set('postTitleHasContent', true);
    } else {
      Session.set('postTitleHasContent', false);
    };
  },
  "click .done-button": function(){
    var postTitle = $('.post-title').val();
    console.log(postTitle);   
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
  },
    "keyup .create-post": function(event){
    var postTitle = event.target.value;
    var code = event.keyCode || event.which;
    
   if(code === 13 && Logd.posts.notEmpty(postTitle)){
    
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
  }
});

