var returns_qty = 0;


Template.newPost.onCreated(function () {
   this.showSearch = new ReactiveVar(false);
//   this.showSearch = new ReactiveVar(null);
});

Template.newPost.onRendered(function(){
    $('.autosize').autosize();
});

Template.newPost.helpers({
  showSearch: function() {
    // return true or false
    return Template.instance().showSearch.get();
}

});

Template.newPost.events({
  "keyup .new-post-form": function(event){
    var hashtagPattern = /#[A-Za-z0-9_]*/gi;
    var postContent = event.target.value;
    var raw_tags = tags = [];

    function removeFirstChar(str){
      return str.substr(1, str.length);
    };
   
    // if return key was entered
    if(event.which === 13){
      returns_qty+=1;

      if(returns_qty == 2){

        raw_tags = postContent.match(hashtagPattern);
        // tags = _.map(raw_tags, removeFirstChar(raw_tags[i]));

        tags = _.map(raw_tags, function(tag) {
          return removeFirstChar(tag);
        })

        console.log(tags);

        // were any tags added?
        //tags = postContent.match(hashtagPattern);
        //if (tags.length > 0) Meteor.call('upsertTags', tags);
        // WAIT FOR METEOR TAGS UPSERT TO FINISH?
        Meteor.call('newPost', postContent, tags);
         
        // TODO: remove autosize 
        //return false // why is this here?
        event.target.value = "";
        returns_qty = 0;
      } 
    }  else {
      
      // if some other key was entered reset
      returns_qty = 0;
    };
  },
  'click .search' : function(event, t){
     console.log("clicked search");
      console.log(t);
     
      t.showSearch.set(true);

   // this.showSearch.set(true);
 
  }
  });

 // var tag_ids = [];
    // var tag = null;

    // // now, need to get the ids for the tags and insert with PostContent
    // for (var i = 0; i < tags.length; i++) {
    //   tag = Tags.find({tag:tag[i]});
    //   tag_ids.push(tag._id);    
    // } 

