Template.tags_list.helpers({
  myTags: function() {
    return Tags.find({ "authors.authorId": Meteor.userId() });    
  }
});