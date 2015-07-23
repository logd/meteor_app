Template.posts_list.helpers({
  totalPostCount: function() {
    return Counts.get('posts-counter');
  },
  displayPostsList: function() {
    if (Counts.get('posts-counter') > 0){
      return true;
    } else {
      return false;
    };
  }
});

Template.posts_list.events({
  "click .delete": function(event) {
    event.preventDefault();
    if (confirm('Really delete this post')) { 
      Meteor.call("deletePost", this._id);
    };
  },
  //  'click .editable' : function(event, template){
  //   // Template.instance().currentlyEditing.set(this._id);
 
  // },
  //   "click .done": function(event,template) {
  //   // Template.instance().currentlyEditing.set(null);
  // },
    "keyup .update-post-content": function(event) {
      var postContent = event.target.value;      
      Meteor.call('updatePost', postId, postContent);            
  },
    "click .tag-matches": function(e) {
      //TODO: refactor: this is the same that is used for tags_list
      e.preventDefault();
      var selected_tag =  $(e.target).text();
      Router.go('tag_matches', { tag: selected_tag });          
  },
    "click .show-post": function(e,t){
  // TODO: reference specific template rather than use global
  $(".app-container").toggleClass("toggled");
  }
});

