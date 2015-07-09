Template.tag_search.helpers({
  matchingPosts: function() {
    return Posts.find({ tags: Router.current().params.tag });    
  },
  page_title: function() {
    return Session.get("page_title");
  }
});