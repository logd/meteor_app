Template.edit_post.onRendered(function(){
    // $('.autosize').autosize();
   this.$('#focus-hack').focus();
});

Template.edit_post.helpers({
  editingPostTitle: function() {
    return Session.get('editingPostTitle');
  },
  editingPostContent: function() {
    return Session.get('editingPostContent');
  }
});

Template.edit_post.events({
  "blur .post-content" : function(e,t){
    var postContent = $('.post-content').val();
    console.log(postContent);
  },
  "click .edit-post-title": function(e,t){
    e.preventDefault();

    // if editing post content, then update that first
    if (Session.get('editingPostContent')){
      var postContent = $('.post-content').val();
      var postTags = Logd.tags.getHashTags(postContent);

      var postAttributes = {
        postId: Router.current().params._id,
        content: postContent,
        tags: postTags
      };

      Meteor.call('updatePostContent', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        };
      });
    };

    Session.set('editingPostContent', false);
    Session.set('editingPostTitle', true);
  },
    "click .edit-post-content": function(e,t){
    e.preventDefault();

    // if editing post title, then update that first
    if (Session.get('editingPostTitle')){
      var postTitle = $('.post-title').val();
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
        };

      }); 
    };
     Session.set('editingPostTitle', false);
     Session.set('editingPostContent', true);
  
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    var postTitle = $('.post-title').val() || this.title;
    var postContent = $('.post-content').val() || this.content || "";
   
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
