Template.page_title.helpers({
  shortenedTitle: function() {
    return Logd.posts.shortenedTitle(this.title); 
  },
    saveNotice: function() {
    if(Session.get("hasContent")){
      return Session.get('saveNotice');
    }
  }
});
