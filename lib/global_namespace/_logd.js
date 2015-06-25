
// app-specific global namespace

Logd = {
  posts :
  {
    postIsEmpty: function (str){

      if (str.trim() === null || str.trim() === ""){
        return true;
      } else {
        return false;
      };

    },
    postTitleFromFirstLine: function (str){
     var contentLines = str.split("\n");

     // set post title as first 50 chars of first line
     var postTitle = (
        // if first line is greater than 50 chars
        contentLines[0].length > 50  ? 
        
        // set title to first 50 chars
        contentLines[0].substring(0,50) : 

        // else set to full first line
        contentLines[0]

      );

     return postTitle;

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