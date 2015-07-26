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
   
    var autoSave = function() {
      Session.set("displaySaveNotice", true);
      Session.set("saveNotice", "Saving changes...");
      // console.log("autoSave postAttributes: " + postAttributes);

      Meteor.call('updatePost', postAttributes, function(error, result){

        if (error){
          alert(error.reason);
        } else {

          // console.log("returned result: " + result.tags);
          if (result.tags.length > 0){
             LogdTags.upsertTags(result.tags);
          };
  
          Session.set("saveNotice", "Changes saved.");

           setTimeout(function() {
            Session.set("displaySaveNotice", false);
          }, 2000);
           
        };
      });
    };

    if(LogdPosts.hasContent(postAttributes.content)){
      LogdPosts.autoSaveTimer.resetTimer();
      LogdPosts.autoSaveTimer.startTimer(autoSave);
    };

  },
  "blur .editor textarea": function(event,template){
    var content = event.target.value;
    var postId = Router.current().params._id;
    // Logd.posts.saveChanges(content, postId);  
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    Router.go('show_post', { _id: Router.current().params._id }); 
  }
});
