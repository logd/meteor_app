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
  // "keyup .has-content": function(event, template){ 
  //    var content = event.target.value;
  //    if (LogdPosts.hasContent(content)) {
  //      Session.set('hasContent', true);
  //      // console.log("Post has content");
  //    } else{
  //        Session.set('hasContent', false);
  //       // console.log("Post is empty");
  //    }; 
  // },
  "input .editor textarea": function(event,template){
    // 1. get current content and post id

    var postContent = event.target.value;

    var postAttributes = {
      postId: Router.current().params._id,
      content: postContent,
      tags: LogdTags.getTags(postContent)
    };
   
      // set up autoSaving of post data, updating displayed post title, and adding any new tags to db
      var autoSave = function() {
        Session.set("displaySaveNotice", true);
        Session.set("saveNotice", "Saving changes...");
        console.log("autoSave postAttributes: " + postAttributes);
      
        // this actually saves to the db and returns a post object
        // var post = LogdPosts.saveChanges(postAttributes);
        Meteor.call('updatePost', postAttributes, function(error, result){

          if (error){
            alert(error.reason);
          } else {

            console.log("returned result: " + result.tags);

            // if tags were found, add new ones to db
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

    //2. does the post have content?
    if(LogdPosts.hasContent(postAttributes.content)){
      LogdPosts.autoSaveTimer.resetTimer();
      LogdPosts.autoSaveTimer.startTimer(autoSave);
    };

   



        // // 2. was the return key entered? (No, can only be for first return)
        // if (event.which == 32) {
        //   // if post has content, save immediately
        //   LogdPosts.saveChanges(content, postId);
        // } else {

        //   LodgPost.autoSaveTimer.start(content, postId);
          
        //   // save after 1.5 seconds
        //   // var autoSaveTimer = Meteor.setTimeout(function() {
        //   //     LogdPosts.saveChanges(content, postId);
        //   // }, 1500)};

        //   // reset the timer
        //   Meteor.clearTimeout(autoSaveTimer);

        // };

     

      //reset the save timer
      // Logd.posts.saveTimer.reset();
      // Logd.posts.saveTimer.start(content, postId);

    // };

    // 3. if the post has content, reset the timer, wait 1.5 seconds, then save changes

    // 4. save no matter what after 1.5 seconds of typing

    // 5. save on return, unless content is empty


    

    
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
