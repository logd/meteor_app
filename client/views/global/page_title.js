Template.page_title.helpers({
  pageTitle: function () {

    // This is purely based on the current router name but for edit post, the title value may change while in the same route
  
    switch (Router.current().route.getName()){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      case 'edit_post':
        var thisPostTitle = Logd.posts.getPostTitle(Router.current().params._id);
        return Logd.posts.shortenedTitle(thisPostTitle);
    
      case 'show_post':
        var thisPostTitle = Logd.posts.getPostTitle(Router.current().params._id);
        return Logd.posts.shortenedTitle(thisPostTitle);

      case 'tags_list':
        return "My Topics";

      default: 
        return "Logd";
    };
  }
   // shortenedTitle: function() {

  //   // DEBUG: is this the culprit here?
  //   // need to maybe get the shortened title as a template helper instead
  //   var current_view = Router.current().route.getName();
  //   if(current_view === 'edit_post' || current_view === 'show_post' ){
  //     return Logd.posts.shortenedTitle(this.title);
  //   } else {
  //     return false;
  //   }
    
  // }
});
