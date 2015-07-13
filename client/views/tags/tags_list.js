Template.tags_list.helpers({
  myTags: function() {
    var my_tags = Tags.find({ "authors.authorId": Meteor.userId() });

    if(my_tags != undefined) {
      // Sesson.set("tag_title", my_tags.title);
      return my_tags;
    } else {
      return false;
    }
    // return Tags.find({ "authors.authorId": Meteor.userId() });    
  }
});

Template.tags_list.events({
  "click .tag-matches": function(e) {
    e.preventDefault();
    var selected_tag =  $(e.target).text();
    Router.go('tag_matches', { tag: selected_tag });          
  }
});