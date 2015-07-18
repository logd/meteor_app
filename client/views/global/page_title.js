Template.page_title.helpers({
  pageTitle: function () {
  
    switch (Router.current().route.getName()){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      case 'edit_post':
        console.log("edit title: " + this.title);
        // TITLE VALUE BEING PASSED HERE IS 'UNDEFINED'
        return Logd.posts.shortenedTitle(this.title);

      case 'show_post':
        console.log("show title: " + this.title);
         return Logd.posts.shortenedTitle(this.title);

      case 'tags_list':
        return "My Topics";

      default: 
        return "Logd";
    };
  }
});
