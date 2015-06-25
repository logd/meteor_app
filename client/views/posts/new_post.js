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

       console.log("each line: " + postContent.split("\n"));

        if(postContent.trim() === null || postContent.trim() === ""){
          // Template.instance().contentIsEmpty.set(true);
  
          // console.log(Template.instance().contentIsEmpty.get());
          returns_qty = 0;
        } else {
          // Template.instance().contentIsEmpty.set(false);
          // console.log(Template.instance().contentIsEmpty.get());
          console.log("returns: " + returns_qty);


          // only count returns qty if content is not empty, ie user just hit return twice without typing any text
          returns_qty+=1;
        };

      if(returns_qty == 2){

        var postTags = Logd.tags.getHashTags(postContent);

        // raw_tags = postContent.match(Logd.hashtagPattern);
        // tags = _.map(raw_tags, removeFirstChar(raw_tags[i]));

        // tags = _.map(raw_tags, function(tag) {
        //   return Logd.removeFirstChar(tag);
        // })
        console.log(postTags);

        // create post title
        var contentLines = postContent.split("\n");

        // set post title as first 50 chars of first line
        postTitle = ( contentLines[0].length > 50  ?  contentLines[0].substring(0,50) : contentLines[0] );
    

        // were any tags added?
        //tags = postContent.match(hashtagPattern);
        //if (tags.length > 0) Meteor.call('upsertTags', tags);
        // WAIT FOR METEOR TAGS UPSERT TO FINISH?

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

