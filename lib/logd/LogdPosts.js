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
  if(Session.get("displaySaveNotice") != true){
      Session.set("displaySaveNotice", true);
     Session.set("saveNotice", "Saving changes...");
  };

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
        // pause 2s, then...
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
// ,
// saveNoticeThrottle: function(){
//   var timer;
//   var intervalDuration = 2000;

//   var saveInterval = Meteor.setInterval(function(){
    
//     // , intervalDuration);
//   }

//   // if saveNotice currently is hidden
 
//   // if(!Session.get("displaySaveNotice")){

//   //   // display any save notices
//   //   Session.set("displaySaveNotice", true);

   
//   //   Meteor.setTimeout(function() {
//   //     // pause 2s, then...
//   //     Session.set("displaySaveNotice", false);
//   //   }, 2000);

//   //    // pause 2s, then...
//   //   Meteor.setTimeout(function() {
//   //     Session.set("displaySaveNotice", true);
//   //   }, 2000);
//   // }
   
// }
,

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

    var shortenedTitleLength = 40;

    if(original_title.length > shortenedTitleLength) {
      var shortened_title = original_title.substr(0, shortenedTitleLength) + "...";
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