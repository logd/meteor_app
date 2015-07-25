LogdPageTitles = {
  getPageTitle: function(postId){

    var post = Posts.findOne({_id: postId });
    console.log("found post title: " + post.title);
    var postTitle = post.title;

    var pageTitle = LogdPageTitles.shortenedTitle(postTitle);
    return pageTitle;
  }
  // ,setPageTitle: function(id, title){
  //   var thisPageTitle = "pageTitle-" + id;
  //   Session.set(thisPageTitle, title);
  //   console.log("page title that was set: " + Session.get(thisPageTitle));
  // }
  ,shortenedTitle : function (original_title) {

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
   }
};