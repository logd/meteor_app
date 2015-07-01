
// app-specific global namespace

Logd = {
  posts :
  {
    notEmpty: function (str){

      if (str.trim() === null || str.trim() === ""){
        return false;
      } else {
        return true;
      };

    },
    getTitleFromContent: function (str){
     var postContentElements = {};
     var contentLines = str.split("\n");

     // set post title as first 50 chars of first line

     postContentElements.title = contentLines[0];
     contentLines.splice(0,1);
     postContentElements.content = contentLines.join("\n");

     return postContentElements;

     // no longer handling this here, instead on display:
      // if first line is greater than 50 chars
      //contentLines[0].length > 50  ? 
      
      // set title to first 50 chars
      //contentLines[0].substring(0,50) : 

      // else set to full first line

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