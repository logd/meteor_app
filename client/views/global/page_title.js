Template.page_title.helpers({
  pageTitle: function () {
  
    switch (Router.current().route.getName()){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      // case 'edit_post':
      //   var postId = Router.current().params._id;
      //   return LogdPageTitles.getPageTitle(postId);
    
      // case 'show_post':
      //   var postId = Router.current().params._id;
      //   return LogdPageTitles.getPageTitle(postId);

      case 'tags_list':
        return "My Topics";

      default: 
        return "Logd";
    };
  }
});


