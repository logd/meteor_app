
Template.edit_post.onCreated(function(){

  // get the current template instance
  // var instance = this;
 

  // subscribe to content publication

  // set a local instance variable for the current content

  // compare them every 1.5s

  // if they are different, save changes

  
});


Template.edit_post.onRendered(function(){
 $('.auto-size').autosize();
});

// Template.edit_post.onDestroyed(function(){
//    Session.set("postContent", null);
// });


Template.edit_post.helpers({
  // postContent: function() {
  //   if (LogdPosts.hasContent(this.content)) {
  //     Session.set("hasContent", true);
  //   } else{
  //     Session.set("hasContent", false);
  //   };
  // }
});

Template.edit_post.events({
  "keyup .has-content": _.throttle(function(event){
    if(LogdPosts.hasContent(event.target.value)){
      Session.set("hasContent", true);
    } else {
      Session.set("hasContent", false);
    };
  }, 200),
  "input .editor textarea": _.throttle(function(event,instance){
     var postAttributes = {
        postId: Router.current().params._id,
        content: event.target.value
      };

    // on input, start 1.5s timer
    Meteor.setTimeout(function() {

      // after 1.5s, get current content
      postAttributes.content = event.target.value;
      postAttributes.tags = LogdTags.getTags(postAttributes.content);
   
       // if content is not empty      
      if(LogdPosts.hasContent(postAttributes.content)){

         // inform about this globally (not good, but oh well)
         Session.set("hasContent", true);

         // reset the "pause typing" timer
         LogdPosts.saveOnPauseTimer.resetTimer();

          // update changes
         LogdPosts.updatePost(postAttributes);

      } else {
        Session.set("hasContent", false);
      };
    }, 1500);

    postAttributes.content = event.target.value;
    postAttributes.tags = LogdTags.getTags(postAttributes.content);
    LogdPosts.saveOnPauseTimer.resetTimer(); 
    LogdPosts.saveOnPauseTimer.startTimer(postAttributes);
    
  }, 200),
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
