Template.tags_list.helpers({
  myTags: function() {
   return Tags.find({ "authors.authorId": Meteor.userId() }, {sort: {title: 1}}).fetch();    
  }
});

Template.tags_list.events({
  "click .matching-posts": function(e) {
    //TODO: refactor: this is the same that is used for posts_list
    e.preventDefault();
    var selected_tag =  $(e.target).text();
    Router.go('tag_matches', { tag: selected_tag });          
  }
});