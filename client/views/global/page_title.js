Template.page_title.helpers({
  pageTitle: function () {
  
    switch (Router.current().route.getName()){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      case 'edit_post':
        // console.log("edit post id from route: " + Router.current().params._id);       

        var thisPostTitle = Logd.posts.getPostTitle(Router.current().params._id);

        // console.log("edit post id from route: " + Router.current().params._id);

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
});
