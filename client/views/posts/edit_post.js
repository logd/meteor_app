Template.edit_post.onRendered(function(){
   // this.$('.post-content').click();
   this.$('.post-content').focus();
});

Template.edit_post.helpers({
  hasContent: function() {
    var postContent = $('.post-content').val();
    Logd.posts.hasContent(postContent) ?
        Session.set('hasContent', true) :
        Session.set('hasContent', false);
  }
});

Template.edit_post.events({
  // "keyup .has-content": function(event){
  //    var content = event.target.value;

  //    Logd.posts.hasContent(content) ?
  //       Session.set('hasContent', true) :
  //       Session.set('hasContent', false);
  // },
  "input .post-content": function(event,template){
    //ON CREATE, CONTENT IS EMPTY
    var content = event.target.value;
    var postId = Router.current().params._id;

    // on input, if post content has content,
    // reset the save timer and save changes
    if(Logd.posts.hasContent(content)){
      Logd.posts.saveTimer.clear();

      Logd.posts.saveTimer.set(function() {

        var tags = Logd.posts.saveChanges(content, postId);

        if (tags.length > 0) {
           LogdTags.upsertTags(tags);
        };
      
      });
    };    
  },
  "blur .post-content": function(event,template){
    var evtTarget = event.target;
    var postId = Router.current().params._id;
    Logd.posts.saveChanges(evtTarget.value, postId);  
  },
  "click .done-editing": function(e,t){
    e.preventDefault();
    Router.go('show_post', { _id: Router.current().params._id }); 
  }
});
