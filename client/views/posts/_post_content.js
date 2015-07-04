Template.post_content.onRendered(function(){
  // $('.autosize').autosize();
  this.$('.post-content').focus();
});

Template.post_content.helpers({
  // contentEditable: function(){
  //   return Session.get("contentEditable");
  // }
})

Template.post_content.events({
  "keyup .has-content": function(event){
     var content = event.target.value;

      if(Logd.posts.hasContent(content)){
         Session.set('hasContent', true);
  
      } else {
        Session.set('hasContent', false);
      };
  },

  "keyup .create-post": function(){
    event.preventDefault();
    var content = event.target.value;
    var code = event.keyCode || event.which;

    if(code === 13 && Logd.posts.hasContent(postContent)){
      var postTitle = Logd.tags.getFirstLine(postContent);
      var postTags = Logd.tags.getHashTags(postContent);

      var postAttributes = {
        title: postTitle,
        content: postContent,
        tags: postTags
      };

      Meteor.call('postInsert', postAttributes, function(error, result){

        if (error){
          alert(error.reason);
        } else {
          Router.go('edit_post', { _id: result._id });
        };

      });
    }
  }
});