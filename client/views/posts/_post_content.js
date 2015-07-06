Template.post_content.onRendered(function(){
  // $('.autosize').autosize();
  this.$('.post-content').focus();
});

Template.post_content.helpers({
  // newPost: function(){
  //   return Session.get("newPost");
  // }
})

Template.post_content.events({
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

    Logd.posts.saveTimer.clear();

    Logd.posts.saveTimer.set(function() {
      Logd.posts.saveChanges(evtTarget.value, postId);
    });
  }
});