LogdPageTitles = {
  getPageTitle: function(id){
    var pageTitleId = "pageTitle-" + id;
    console.log("page title before shortening: " + Session.get(pageTitleId));
    var pageTitle = LogdPageTitles.shortenedTitle(Session.get(pageTitleId));

    return pageTitle;
  }
  ,setPageTitle: function(id, title){
    var thisPageTitle = "pageTitle-" + id;
    Session.set(thisPageTitle, title);
    console.log("page title that was set: " + Session.get(thisPageTitle));
  }
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