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
      title: Logd.posts.getFirstLine(postContent),
      tags: Logd.tags.getHashTags(postContent)
    };

    Meteor.call('updatePost', postAttributes, function(error, result){

      if (error){
        alert(error.reason);
      }  else {

         Session.set("saveNotice", "Changes saved.");
         // console.log("updatePost result: " + result);

         setTimeout(function() {
          Session.set("saveNotice", "");
        }, 2500);
      }

    });

    return {
      tags: postAttributes.tags,
      title: postAttributes.title
    }
  },
  getPostTitle: function(id){
    var thisPostTitle = "postTitle-" + id;
    return Session.get(thisPostTitle);
  },
  setPostTitle: function(id, title){
    var thisPostTitle = "postTitle-" + id;
    Session.set(thisPostTitle, title);
  },
  hasContent: function (content){
   
    if (content == null || content == undefined ){

      return false;

    } else if (content.trim() == ""){

      return false;

    } else {

      return true;

    };

  },
  getFirstLine: function (content){
    var contentLines = content.split("\n");
    return contentLines[0];
  },
   shortenedTitle : function (original_title) {
     if(original_title.length > 30) {
       var shortened_title = original_title.substr(0, 30) + "...";
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