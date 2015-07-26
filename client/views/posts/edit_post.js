Template.edit_post.onRendered(function(){
 $('.auto-size').autosize();
});

// Template.edit_post.onDestroyed(function(){
//    Session.set("postContent", null);
// });


// Template.edit_post.helpers({
//   // postTitle: function() {
//   //   Session.set("postTitle", this.title);
//   // }
// });

Template.edit_post.events({
  "input .editor textarea": function(event,template){

    var postContent = event.target.value;

    var postAttributes = {
      postId: Router.current().params._id,
      content: postContent,
      tags: LogdTags.getTags(postContent)
    };
   


    if(LogdPosts.hasContent(postContent)){
      LogdPosts.autoSaveTimer.resetTimer();
      LogdPosts.autoSaveTimer.startTimer(postAttributes);
    };

  },
  "blur .editor textarea": function(event){
    var postContent = event.target.value;

    var postAttributes = {
      postId: Router.current().params._id,
      content: postContent,
      tags: LogdTags.getTags(postContent)
    };
   
    LogdPosts.updatePost(postAttributes);  
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    Router.go('show_post', { _id: Router.current().params._id }); 
  }
});
