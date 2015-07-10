
// app-specific global namespace

LogdAppHeader = {

  home: {
    headerLeft:  {
      title: "View Tags",
      event: "view-tags",
      icon: "tags"
    },
    headerRight:  {
      title: "New Post",
      event: "create-post",
      icon: "plus"
    }
  },
  edit_post: {
    headerLeft:  {
      title: "Back to previous page",
      event: "back-to-previous",
      icon: "chevron-left"
    },
    headerRight:  {
      title: "Done Editing",
      event: "done-editing",
      icon: "check"
    }
  },
  show_post: {
    headerLeft:  {
      title: "Back to previous page",
      event: "back-to-previous",
      icon: "chevron-left"
    },
    headerRight:  {
      title: "Edit Post",
      event: "edit-post",
      icon: "pencil"
    }
  }
};

Logd = {
  posts :
  {
    saveTimer: function(){
    var timer;

    this.set = function(autoSave) {
      timer = Meteor.setTimeout(function() {
        autoSave();
      }, 1500)
    };

    this.clear = function() {
      Meteor.clearInterval(timer);
    };

    return this;    
  }(),
  saveChanges: function(postContent, postId){

    Session.set("saveNotice", "Saving changes...");
    // console.log(postContent);
    // console.log(id);

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
         
         setTimeout(function() {Session.set("saveNotice", "");}, 3000);
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
  getTitle: function (str){
   var contentLines = str.split("\n");
   var title = contentLines[0];
   // Logd.posts.shortenedTitle(title);
   return title;
  },
   shortenedTitle : function (original_title) {
     if(original_title.length > 30) {
       return original_title.substr(0, 30);
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