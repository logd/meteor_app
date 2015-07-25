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
        LogdPageTitles.setPageTitle(result._id,result.title);
        Router.go('edit_post', {_id: result._id});
      };
    });
    
  }
  // ,
  // setPageTitle: function(id, title){
  //   var thisPageTitle = "pageTitle-" + id;
  //   Session.set(thisPageTitle, title);
  // },
  //   getPageTitle: function(id){
  //   //TODO: move all this to LogdPosts
  //   var thisPageTitle = "pageTitle-" + id;
  //   return Session.get(thisPageTitle);
  // }
  ,
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
  // ,
  // shortenedTitle : function (original_title) {

  //   // BUG: in some cases, original_title is undefined, not clear why
  //   if (original_title == undefined) {
  //     return "Untitled post";

  //   } else{

  //     if(original_title.length > 30) {
  //      var shortened_title = original_title.substr(0, 30) + "...";
  //      return shortened_title;
  //    } else {
  //      return original_title;
  //    };

  //   };

  //  }
};