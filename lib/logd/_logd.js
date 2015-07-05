
// app-specific global namespace

Logd = {
  posts :
  {
//     hasPosts : function(){
//       var current_user_has_posts = Posts.find({authorId: Meteor.userId()}).count() === 0);
      
//       if (current_user_has_posts == null) {
//         return false;
//       } else {

//         var has_only_new_post = 
//         return true;
//       };
// }

    
    // newPost: function(current_user){

    // }
    // ,
    hasContent: function (str){

      if (str.trim() === null || str.trim() === ""){
        return false;
      } else {
        return true;
      };

    },

   // pauseTimer: function(post){
   //  var timer;

   //    this.set = function(content) {
   //      timer = Meteor.setTimeout(function() {
   //        updatePost();
   //      }, 3000)
   //    };

   //    this.clear = function() {
   //      Meteor.clearInterval(timer);
   //    };

   //    return this;    
   //  }();

   // },
   

    getFirstLine: function (str){
     // var postContentElements = {};
     var contentLines = str.split("\n");
     return contentLines[0];


    // set post title as first 50 chars of first line

     // postContentElements.title = contentLines[0];
     // contentLines.splice(0,1);
     // postContentElements.content = contentLines.join("\n");

     // return postContentElements;
     // no longer handling this here, instead on display:
      // if first line is greater than 50 chars
      //contentLines[0].length > 50  ? 
      
      // set title to first 50 chars
      //contentLines[0].substring(0,50) : 

      // else set to full first line

    },
    saveChanges: function(event, currentPostId){
      console.log(event);
      var postContent = event.target.value;
      var postTitle = Logd.posts.getFirstLine(postContent);
      var postTags = Logd.tags.getHashTags(postContent);


      var postAttributes = {
        //TODO: only set new_post once, not for every update
        postId : currentPostId,
        newPost: false,
        title: postTitle,
        content: postContent,
        tags: postTags
      };

      Meteor.call('updatePost', postAttributes, function(error, result){
        if (error){ alert(error.reason); }
      });
      
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