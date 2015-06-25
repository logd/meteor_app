var returns_qty = 0;
// var postTitle = "";

Template.new_post.onCreated(function () {
   // this.contentIsEmpty = new ReactiveVar(true);
   // this.isEditing = new ReactiveVar(true);
});

// Template.new_post.onRendered(function(){
//     $('.autosize').autosize();
// });

// Template.new_post.helpers({

// });

Template.new_post.events({
  "keyup .new-post-form": function(event){
    var postContent = event.target.value;
   //  // var raw_tags = tags = [];
   // var postTitle = "";
   
    // if return key was entered
    if(event.which === 13){
      // don't count returns qty if content is not empty, eg user just hit return twice without typing any text
        if(Logd.posts.postIsEmpty(postContent)){
          returns_qty = 0;
        } else {
          returns_qty+=1;
        };

      if(returns_qty == 2){

        var postTags = Logd.tags.getHashTags(postContent);

        var postTitle = Logd.posts.postTitleFromFirstLine(postContent);

        var postAttributes = {
          title: postTitle,
          content: postContent,
          tags: postTags 
        };

        // if Session.get("newPost")
        // call PostInsert
        // else call postUpdate
        // new method: add tags unless found
        // no, not that simple: for create, creating on double-return (or shift + return), for edit, updating on keyup?

        Meteor.call('postInsert', postAttributes, function(error, result){
          if (error){
            alert(error.reason);
          } else {
             Router.go('show_post', { _id: result._id });
          }
        });

        // reset the field - is this needed?
        event.target.value = "";
        returns_qty = 0;
      } 
    }  else {
      
      // if some other key was entered reset
      returns_qty = 0;
    };
  }
  });

