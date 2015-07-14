Template.page_title.helpers({
  pageTitle: function () {
  
    switch (Router.current().route.getName()){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      case 'edit_post':
        return Logd.posts.shortenedTitle(this.title);

      case 'show_post':
         return Logd.posts.shortenedTitle(this.title);

      case 'tags_list':
        return "My Topics";

      default: 
        return "Logd";
    };
  }
  ,
  // shortenedTitle: function() {
  //   return Logd.posts.shortenedTitle(this.title); 
  // },
    saveNotice: function() {
    if(Session.get("hasContent")){
      return Session.get('saveNotice');
    }
  }
});
