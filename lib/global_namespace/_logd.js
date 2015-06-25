// https://medium.com/@sirchill3/meteor-managing-the-global-namespace-5a50080a05ea

Logd = {
  posts : {
    removeFirstChar: function (str){
      return str.substr(1, str.length);
    }
  },
  tags : {
    getHashTags : function(str) {

      // find sub-strings matching '#foo' in str
      // var raw_tags = str.match(/#[A-Za-z0-9_]*/gi);

      var hashTagPattern = /#[A-Za-z0-9_]*/gi;

      var tags =  _.map(

        // find all matches for '#foo' in str
        str.match(hashTagPattern),

        // remove first character (the '#') 
        function(tag) {
          return tag.substr(1, tag.length);
        });

        return tags;
      }
    
  }
};