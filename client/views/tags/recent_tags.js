Template.recent_tags.helpers({
  recentTags: function() {
    return Tags.find({"authors.authorId": Meteor.userId()}, {sort: {"authors.lastUsed": -1}, limit: 3}).fetch();
  }
});
