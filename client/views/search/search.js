Template.search.helpers({
  // searchResults: function() {
  //   var query = Router.current().params.foo
  //   console.log(query);
  //   Session.set("page_title", query);
  //   return Posts.find({ tags:query }, { sort: {createdAt: -1 }});
  // }
});

Template.search.events({
  // "click .delete": function() {

  //   if (confirm("Are you sure?")) {
  //      Meteor.call("deletePost", this._id);
  //   }
  // },
  //  'click .editable' : function(event, template){
  //   // Template.instance().currentlyEditing.set(this._id);
 
  // },
  //   "click .done": function(event,template) {
  //   // Template.instance().currentlyEditing.set(null);
  // },
  //   "keyup .update-post-content": function(event) {
    
  //     // var postId = Template.instance().currentlyEditing.get();
  //     var postContent = event.target.value;      
  //     Meteor.call('updatePost', postId, postContent);            
  // },
  //   "click .tag-filter": function(e) {
  //     e.preventDefault();
  //     var tag =  $(e.target).text();
  //     Session.set("tag-search", tag);
  //     // var selectedTag = $(e.target).text();      
  //     // console.log($(e.target).text()); 
  //     Router.go('search_results', { query: tag });          
  // },
  //   "click .show-post": function(e,t){
  // // TODO: reference specific template rather than use global
 
  // $(".app-container").toggleClass("toggled");
  // }
});

