var returns_qty = 0;
var postTitle = "";


Template.new_post.onCreated(function () {
   // this.contentIsEmpty = new ReactiveVar(true);
   // this.isEditing = new ReactiveVar(true);
});

Template.new_post.onRendered(function(){
    $('.autosize').autosize();
});

Template.new_post.helpers({
  // contentIsEmpty: function() {
  //   return Template.instance().contentIsEmpty.get();
  // }
});

Template.new_post.events({
  "keyup .new-post-form": function(event){
    var postContent = event.target.value;

     if(postContent.trim() === null || postContent.trim() === ""){
        Session.set("postHasContent", false);
      } else {
        Session.set("postHasContent", true);
      };
  
    function removeFirstChar(str){
      return str.substr(1, str.length);
    };
   
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

        raw_tags = postContent.match(hashtagPattern);
        // tags = _.map(raw_tags, removeFirstChar(raw_tags[i]));

        tags = _.map(raw_tags, function(tag) {
          return removeFirstChar(tag);
        })
        console.log(tags);

        // create post title
        var contentLines = postContent.split("\n");

        // set post title as first 50 chars of first line
        postTitle = ( contentLines[0].length > 50  ?  contentLines[0].substring(0,50) : contentLines[0] );
    

        // were any tags added?
        //tags = postContent.match(hashtagPattern);
        //if (tags.length > 0) Meteor.call('upsertTags', tags);
        // WAIT FOR METEOR TAGS UPSERT TO FINISH?
        Meteor.call('createPost', postContent, postTitle, tags);
        Router.go('show_post');

         
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
  // ,
  // 'click .done' : function(event, t){
  //   // need to detect this click event within AppLayout
  //    var postContent = event.target.value;
  //    console.log(postContent);
  //    raw_tags = postContent.match(hashtagPattern);
  //       // tags = _.map(raw_tags, removeFirstChar(raw_tags[i]));

  //   tags = _.map(raw_tags, function(tag) {
  //       return removeFirstChar(tag);
  //   });

  //    // create post title
  //    var contentLines = postContent.split("\n");

  //     // set post title as first 50 chars of first line
  //     postTitle = ( contentLines[0].length > 50  ?  contentLines[0].substring(0,50) : contentLines[0] );
    
  //     Meteor.call('createPost', postContent, postTitle, tags);
  //       Router.go('show_post');
  // }
  // ,
  // 'click .search' : function(event, t){
  //    console.log("clicked search");
  //     console.log(t);
     
  //     t.showSearch.set(true);

  //  // this.showSearch.set(true);
 
  // }
  });

 // var tag_ids = [];
    // var tag = null;

    // // now, need to get the ids for the tags and insert with PostContent
    // for (var i = 0; i < tags.length; i++) {
    //   tag = Tags.find({tag:tag[i]});
    //   tag_ids.push(tag._id);    
    // } 

