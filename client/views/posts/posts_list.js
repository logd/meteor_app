Template.posts_list.helpers({
  myPosts: function() {
    return Posts.find({authorId: Meteor.userId()}, {sort: {createdAt: -1}});
  }
});

Template.posts_list.events({
  "click .delete": function(event) {
    event.preventDefault();
    if (confirm('Really delete this post')) { 
      Meteor.call("deletePost", this._id);
    };
  },
   'click .editable' : function(event, template){
    // Template.instance().currentlyEditing.set(this._id);
 
  },
    "click .done": function(event,template) {
    // Template.instance().currentlyEditing.set(null);
  },
    "keyup .update-post-content": function(event) {
    
      // var postId = Template.instance().currentlyEditing.get();
      var postContent = event.target.value;      
      Meteor.call('updatePost', postId, postContent);            
  },
    "click .tag-filter": function(e) {
      e.preventDefault();
      var selected_tags =  $(e.target).text();
     
      // Session.set("tag-search", tag);
      // var selectedTag = $(e.target).text();      
      // console.log($(e.target).text()); 
      Router.go('search', { tags: selected_tags });          
  },
    "click .show-post": function(e,t){
  // TODO: reference specific template rather than use global
 
  $(".app-container").toggleClass("toggled");
  }
});

