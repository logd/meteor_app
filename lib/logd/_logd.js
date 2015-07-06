
// app-specific global namespace

Logd = {
  posts :
  {
    saveTimer: function(){
    var timer;

    this.set = function(autoSave) {
      timer = Meteor.setTimeout(function() {
        autoSave();
      }, 3000)
    };

    this.clear = function() {
      Meteor.clearInterval(timer);
    };

    return this;    
  }(),
  saveChanges: function(postContent, postId){

    Session.set("saveNotice", "Saving changes");
    // console.log(postContent);
    // console.log(id);

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
      }

    });
  },
  hasContent: function (str){

    if (str.trim() === null || str.trim() === ""){
      return false;
    } else {
      return true;
    };

  },
  getFirstLine: function (str){
   var contentLines = str.split("\n");
   return contentLines[0];
  },
   truncateTitle : function (str) {
     if(str.length > 20) {
       return str.substr(0, 19);
     } else {
       return false;
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