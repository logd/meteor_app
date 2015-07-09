Template.posts_list.helpers({
  myPosts: function() {
    return Posts.find({authorId: Meteor.userId()}, {sort: {updatedAt: -1}});
    // console.log(posts);
    // var posts = Posts.find({authorId: Meteor.userId()}, {sort: {updatedAt: -1}});
    // console.log(posts);
    // if(posts.find().count > 0){
    //   return Posts.find({authorId: Meteor.userId()}, {sort: {updatedAt: -1}});
    // } else {
    //   return false;
    // };
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
    "click .tag-search": function(e) {
      e.preventDefault();
      var selected_tag =  $(e.target).text();
     
      // Session.set("tag-search", tag);
      // var selectedTag = $(e.target).text();      
      // console.log($(e.target).text()); 
      Router.go('tag_search', { tag: selected_tag });          
  },
    "click .show-post": function(e,t){
  // TODO: reference specific template rather than use global
 
  $(".app-container").toggleClass("toggled");
  }
});

