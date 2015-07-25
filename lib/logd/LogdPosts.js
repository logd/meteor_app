LogdPosts = {
createPost: function(){
   var postAttributes = {
     title: "New Post",
     newPost: true
   };

   Meteor.call('createPost', postAttributes, function(error, result){
    if (error){
      alert(error.reason);
    } else {
      Session.set("hasContent", false);
      // LogdPageTitles.setPageTitle(result._id,result.title);
      Router.go('edit_post', {_id: result._id});
    };
  });
},
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

},
shortenedTitle : function (original_title) {

  if (original_title == undefined) {

    return "Untitled post";

  } else {

    if(original_title.length > 30) {
      var shortened_title = original_title.substr(0, 30) + "...";
     return shortened_title;

     } else {

       return original_title;
     };
   };
},
getFirstLine: function (content){
  //assumes content not empty

  var contentLines = content.split("\n");
    // return contentLines[0];
  var firstLine;
  console.log("content lines: " + contentLines);

  // return first line that is not empty
  for (var i = 0; i = contentLines.length; i++) {
    var line = $.trim(contentLines[i]);

    if(line != "") {
      firstline = line;
      console.log("first line with content: " + line);
      break;
    }
  };
  return firstLine; 
}

};