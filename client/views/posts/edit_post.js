Template.edit_post.onRendered(function(){
 $('.auto-size').autosize();
});

// Template.edit_post.onDestroyed(function(){
//    Session.set("postContent", null);
// });


Template.edit_post.helpers({
  // postContent: function() {
  //  Session.set("postContent", this.content);
  // }
});

Template.edit_post.events({
  "keyup .has-content": function(event, template){ 
     var content = event.target.value;
     // var contentTest = template.content;
     // console.log("post content: " + Session.get("postContent"));


     // Logd.posts.hasContent(content) ?
     //    Session.set('hasContent', true) :
     //    Session.set('hasContent', false);
  },
  "input .editor textarea": function(event,template){
    //On create, content is empty...
    // var content = event.target.value;
    // var postId = Router.current().params._id;

    // set up autoSaving of post data, updating displayed post title, and adding any new tags to db
    var autoSave = function() {

      // this actually saves to the db and returns a post object
      // var post = Logd.posts.saveChanges(content, postId);

      // reactively updated the displayed post title
      // Logd.posts.setPostTitle(postId, post.title);

      // // if tags were found, add new ones to db
      // if (post.tags.length > 0) {
      //    LogdTags.upsertTags(post.tags);
      // };
    };

    // on input, if post content has content,
    if(Logd.posts.hasContent(content)){

      // reset the save timer
      Logd.posts.saveTimer.clear();

      // run autoSave as per saveTimer
      Logd.posts.saveTimer.set(autoSave);
    };    
  },
  "blur .editor textarea": function(event,template){
    var content = event.target.value;
    var postId = Router.current().params._id;
    Logd.posts.saveChanges(content, postId);  
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    Router.go('show_post', { _id: Router.current().params._id }); 
  }
});
