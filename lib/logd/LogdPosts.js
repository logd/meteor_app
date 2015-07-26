LogdPosts = {
createPost: function(){
   var postAttributes = {
     title: "New Post",
     newPost: true,
     content: ""
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
updatePost: function(postAttributes) {
  Session.set("displaySaveNotice", true);
  Session.set("saveNotice", "Saving changes...");
  // console.log("autoSave postAttributes: " + postAttributes);

  Meteor.call('updatePost', postAttributes, function(error, result){

    if (error){
      alert(error.reason);
    } else {

      // console.log("returned result: " + result.tags);
      if (result.tags.length > 0){
         LogdTags.upsertTags(result.tags);
      };

      Session.set("saveNotice", "Changes saved.");

       Meteor.setTimeout(function() {
        Session.set("displaySaveNotice", false);
      }, 2000);
       
    };
  });
},
saveOnPauseTimer: function(){
  var timer;
  var timerDuration = 1500;

  this.startTimer = function(postAttributes) {
    timer = Meteor.setTimeout(function() {

      if(LogdPosts.hasContent(postAttributes.content)){
        // if content is not empty
        Session.set("hasContent", true);
        LogdPosts.updatePost(postAttributes)
    } else {
        Session.set("hasContent", false);
    };
  
  }, timerDuration)};

  this.resetTimer = function() {
    Meteor.clearTimeout(timer);
     // console.log("autosave reset");
  };

  // console.log("autoSaveTimer this: " + this);
  return this;    
}()
,
  // saveChanges: function(postAttributes){
   

  //   // var postTitle = LogdPosts.getFirstLine(postAttributes.content);
  //   // var shortenedPostTitle = LogdPosts.shortenedTitle(postTitle);

  //   // var updateAttributes = {
  //   //   postId: postId,
  //   //   content: postContent,
  //   //   title: postTitle,
  //   //   shortenedTitle: shortenedPostTitle,
  //   //   tags: LogdTags.getTags(postContent)
  //   // };

  //   // Meteor.call('updatePost', postAttributes, function(error, result){

  //   //   if (error){
  //   //     alert(error.reason);
  //   //   }  else {

  //   //      Session.set("saveNotice", "Changes saved.");

  //   //      setTimeout(function() {
  //   //       Session.set("displaySaveNotice", false);
  //   //     }, 2000);
  //   //   }

  //   // });

  //   return {
  //     tags: postAttributes.tags
  //     // ,
  //     // title: postAttributes.title
  //   }
  // },
  // getPostTitle: function(id){
  //   //TODO: move all this to LogdPosts
  //   var thisPostTitle = "postTitle-" + id;
  //   return Session.get(thisPostTitle);
  // },
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
  var lineBreaks = content.match(/\n/g)||[];


  if(lineBreaks.length > 0){

    var contentLines = content.split("\n");

    for (var i = 0; i < contentLines.length; i++) {
      var strippedContent = LogdPosts.stripWhiteSpace(contentLines[i]);
      if(strippedContent != "") {
        return strippedContent;
        break;
      }
    };

  } else {
    
    // only one line of text found
    return content;
  }
 
},
  stripWhiteSpace: function(str){
    // http://stackoverflow.com/questions/3000649/trim-spaces-from-start-and-end-of-string
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
  }

};