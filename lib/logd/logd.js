Logd = {
  posts :
  {
    saveTimer: function(){
      var timer;
      var timerDuration = 1500;

      this.set = function(autoSave) {
        timer = Meteor.setTimeout(function() {
              autoSave();
      }, timerDuration)};

      this.clear = function() {
        Meteor.clearTimeout(timer);
      };

      return this;    
    }(),

  saveChanges: function(postContent, postId){
    Session.set("saveNotice", "Saving changes...");

    // DEBUG:
    // postContent might be null here?
    console.log("saveChange postContent: " + postContent);

    var postAttributes = {
      postId: postId,
      content: postContent,
      title: Logd.posts.getTitle(postContent),
      tags: Logd.tags.getHashTags(postContent)
    };

    Meteor.call('updatePost', postAttributes, function(error, result){

      if (error){
        alert(error.reason);
      }  else {
         Session.set("saveNotice", "Changes saved.");
         setTimeout(function() {
          Session.set("saveNotice", "");
        }, 2500);
      }

    });

    return postAttributes.tags;
  },
  hasContent: function (content){

    if (content != null || content.trim() != ""){
      return true;
    } else {
      return false;
    };

  },
  getTitle: function (str){
   var contentLines = str.split("\n");
   return contentLines[0];
   // return title;
  },
   shortenedTitle : function (original_title) {
    console.log("original title: " + original_title.length);
     if(original_title.length > 30) {
       var shortened_title = original_title.substr(0, 30) + "...";
        console.log("shortened title: " + shortened_title);
       return shortened_title;
     } else {
       return original_title;
     };
   }
  },
  tags : {
    getHashTags : function(str) {

      var hashTagPattern = /#[A-Za-z0-9_]*/gi;

      var tags =  _.map(

        // 1. find all matches for '#foo' in str
        str.match(hashTagPattern),
        
        // 2. remove first character (the '#') 
        function(tag) {
          return tag.substr(1, tag.length);
        }
      ); 
      return tags;
    } 
  }
};