Template.edit_post.onRendered(function(){
   // this.$('.post-content').click();
   this.$('.post-content').focus();
});

Template.edit_post.helpers({
  // postContent: function() {
  //  Session.set("postContent", this.content);
  // }
});

Template.edit_post.events({
  "keyup .has-content": function(event){
     var content = event.target.value;

     Logd.posts.hasContent(content) ?
        Session.set('hasContent', true) :
        Session.set('hasContent', false);
  },
  "input .post-content": function(event,template){
    //On create, content is empty...
    var content = event.target.value;
    var postId = Router.current().params._id;

    // on input, if post content has content,
    // reset the save timer and save changes
    if(Logd.posts.hasContent(content)){
      Logd.posts.saveTimer.clear();

      var autoSave = function() {

        var post = Logd.posts.saveChanges(content, postId);       

        Logd.posts.setPostTitle(postId, post.title);

        if (post.tags.length > 0) {
           LogdTags.upsertTags(post.tags);
        };
      
      };

      Logd.posts.saveTimer.set(autoSave);
    };    
  },
  "blur .post-content": function(event,template){
    var content = event.target.value;
    var postId = Router.current().params._id;
    Logd.posts.saveChanges(content, postId);  
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    Router.go('show_post', { _id: Router.current().params._id }); 
  }
});
