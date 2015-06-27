Template.new_post.onCreated(function () {
   // this.contentIsEmpty = new ReactiveVar(true);
   // this.isEditing = new ReactiveVar(true);
});

// Template.new_post.onRendered(function(){
//     $('.autosize').autosize();
// });

// Template.new_post.helpers({

// });

// Template.new_post.helpers({

// });

Template.new_post.events({
  "keyup .new-post-form": function(e,t){
    e.preventDefault();
    var postContent = $('#postContent').val();
  
    // on return, if post is not empty, create post and go to edit post view
    if(event.which === 13 && !Logd.posts.postIsEmpty(postContent)){
      var postTitle = Logd.posts.postTitleFromFirstLine(postContent);

      // now that I have put the first line into the post title, remove the first line from postContent
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
        }
      });
    }
  }
});

