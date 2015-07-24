LogdPosts = {
  createPost: function(tags){
     var postAttributes = {
        title: "New Post",
        newPost: true
      };

      Meteor.call('createPost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Session.set("hasContent", false);
          Logd.posts.setPostTitle(result._id,result.title);

          Router.go('edit_post', {_id: result._id});
        };
      });
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