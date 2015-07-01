Template.edit_post.onRendered(function(){
    // $('.autosize').autosize();
   this.$('#focus-hack').focus();
});

Template.edit_post.helpers({
  truncatedTitle: function() {
    return Logd.posts.truncateTitle(this.title);
  },
  editingPostTitle: function() {
    return Session.get('editingPostTitle');
  },
  editingPostContent: function() {
    return Session.get('editingPostContent');
  }
});

Template.edit_post.events({
  "click .edit-post-title": function(){
    Session.set('editingPostTitle', true);
    this.$('.post-title').focus();
  },
  "click .edit-post-content": function(){
    Session.set('editingPostContent', true);
    this.$('.post-content').focus();
  },
  "blur .post-title" : function(e,t){
    var postContent = $('.post-title').val();
    console.log(postContent);

    var postTags = Logd.tags.getHashTags(postContent);

    var postAttributes = {
      postId: Router.current().params._id,
      title: postContent,
      tags: postTags
    };

    Meteor.call('updatePostTitle', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      };
    });

    Session.set('editingPostTitle', false);

  },
  "blur .post-content" : function(e,t){
  var postContent = $('.post-content').val();
  console.log(postContent);

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

    Session.set('editingPostContent', false);

  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    Router.go('show_post', { _id: Router.current().params._id }); 
  }
});
