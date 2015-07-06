Template.post_title.helpers({
  saveNotice: function() {
    if(Session.get("hasContent")){
      return Session.get('saveNotice');
    }
  },
  shortenedTitle: function() {
    return Logd.posts.shortenedTitle(this.title);
  }
});