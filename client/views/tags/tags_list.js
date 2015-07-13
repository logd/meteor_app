Template.tags_list.helpers({
  myTags: function() {
    var my_tags = Tags.find({ "authors.authorId": Meteor.userId() }).fetch();
    console.log(my_tags);

    if(my_tags.count == 0) {
      return false;
      // Sesson.set("tag_title", my_tags.title);
     
    } else {
       return my_tags;
    }
    // return Tags.find({ "authors.authorId": Meteor.userId() });    
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