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
      Session.set("displaySaveNotice", true);
      Session.set("saveNotice", "Saving changes...");

      var postAttributes = {
        postId: postId,
        content: postContent,
        title: LogdPosts.getFirstLine(postContent),
        tags: Logd.tags.getHashTags(postContent)
      };

    // Meteor.call('updatePost', postAttributes, function(error, result){

    //   if (error){
    //     alert(error.reason);
    //   }  else {

    //      Session.set("saveNotice", "Changes saved.");

    //      setTimeout(function() {
    //       Session.set("displaySaveNotice", false);
    //     }, 2000);
    //   }

    // });

    // return {
    //   tags: postAttributes.tags,
    //   title: postAttributes.title
    // }
  },
  getPostTitle: function(id){
    //TODO: move all this to LogdPosts
    var thisPostTitle = "postTitle-" + id;
    return Session.get(thisPostTitle);
  },
  hasContent: function (content){
   
    if (content == null || content == undefined ){
      return false;
    } else if (content.trim() == ""){
      return false;
    } else {
      return true;
    };

  }
 }
  // ,
  // getFirstLine: function (content){
  //   //assumes content not empty

  //   var contentLines = content.split("\n");
  //   var firstLine;

  //   // return first line   that is not empty
  //   for (var i = 0; i = contentLines.length; i++) {
  //     var line = $.trim(contentLines[i]);

  //     if(line != "") {
  //       firstline = line;
  //       break;
  //     }
  //   };

  //   return firstLine;
    
  // }

};