Template.recent_tags.helpers({
  recentTags: function() {
    return Tags.find({"authors.authorId": Meteor.userId()}, {sort: {"authors.lastUsed": -1}, limit: 3}).fetch();
  }
});

Template.recent_tags.events({
"click .tag-matches": function(e) {
      //TODO: refactor: this is the same that is used for tags_list
      e.preventDefault();
      var selected_tag =  $(e.target).text();
      Router.go('tag_matches', { tag: selected_tag });          
  },
    "click .tags-list": function(event) {
    event.preventDefault();
    Router.go('tags_list');
  }
});
