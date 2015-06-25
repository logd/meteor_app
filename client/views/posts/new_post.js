var returns_qty = 0;
// var postTitle = "";

Template.new_post.onCreated(function () {
   // this.contentIsEmpty = new ReactiveVar(true);
   // this.isEditing = new ReactiveVar(true);
});

// Template.new_post.onRendered(function(){
//     $('.autosize').autosize();
// });

Template.new_post.helpers({
  // contentIsEmpty: function() {
  //   return Template.instance().contentIsEmpty.get();
  // }
});

Template.new_post.events({
  "keyup .new-post-form": function(event){
    var postContent = event.target.value;
    // var raw_tags = tags = [];
   var postTitle = "";
   
    // if return key was entered
    if(event.which === 13){
        if(Logd.posts.postIsEmpty(postContent)){
          returns_qty = 0;
        } else {
          console.log("returns: " + returns_qty);


          // only count returns qty if content is not empty, ie user just hit return twice without typing any text
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

        Meteor.call('postInsert', postAttributes, function(error, result){
          if (error){
            alert(error.reason);
          } else {
             Router.go('show_post', { _id: result._id });
          }
        });
         
        // TODO: remove autosize 
        //return false // why is this here?
        event.target.value = "";
        returns_qty = 0;
      } 
    }  else {
      
      // if some other key was entered reset
      returns_qty = 0;
    };
  }
  });

