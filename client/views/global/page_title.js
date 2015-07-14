Template.page_title.helpers({
  pageTitle: function() {
    return this.title;
  }, 
  shortenedTitle: function() {
    var current_view = Router.current().route.getName();
    if(current_view === 'edit_post' || current_view === 'show_post' ){
      return Logd.posts.shortenedTitle(this.title);
    } else {
      return false;
    }
    
  },
    saveNotice: function() {
    if(Session.get("hasContent")){
      return Session.get('saveNotice');
    }
  }
});
