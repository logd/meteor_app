Template.edit_post.onRendered(function(){
   // this.$('.post-content').click();
   this.$('.post-content').focus();
});

Template.edit_post.helpers({
});

Template.edit_post.events({
  "keyup .has-content": function(event){
     var content = event.target.value;

      if(Logd.posts.hasContent(content)){
         Session.set('hasContent', true);
  
      } else {
        Session.set('hasContent', false);
      };
  },
  "input .post-content": function(event,template){
    var evtTarget = event.target;
    var postId = Router.current().params._id;

  
    if(Logd.posts.hasContent(evtTarget.value)){
      Logd.posts.saveTimer.clear();

      Logd.posts.saveTimer.set(function() {

      var tags = Logd.posts.saveChanges(evtTarget.value, postId);

      console.log(tags);
      // pass this in to a Tags insert call
      if (tags.length > 0) {
         LogdTags.insertOrUpdateTags(tags);
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
