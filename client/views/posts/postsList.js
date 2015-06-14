Template.postsList.onCreated(function () {
  this.currentlyEditing = new ReactiveVar(null);

  // register this template within some central store
  // GalleryTemplates.push(this);
});

Template.postsList.onRendered(function(){
    $('.autosize').autosize();
});

Template.postsList.helpers({
  myPosts: function() {
    return Posts.find({userId: Meteor.userId()}, {sort: {createdAt: -1}});
  },
  postsFilteredByTag: function(selectedTag) {
    return Posts.find({tag:selectedTag}, {sort: {createdAt: -1}});
  },
  isEditable: function() {
    // return true or false
    return this._id === Template.instance().currentlyEditing.get();
}

});

Template.postsList.events({
  "click .delete": function() {

    if (confirm("Are you sure?")) {
       Meteor.call("deletePost", this._id);
    }
  },
   'click .editable' : function(event, template){
    Template.instance().currentlyEditing.set(this._id);
 
  },
    "click .done": function(event,template) {
    Template.instance().currentlyEditing.set(null);
  },
    "keyup .update-post-content": function(event) {
    
      var postId = Template.instance().currentlyEditing.get();
      var postContent = event.target.value;      
      Meteor.call('updatePost', postId, postContent);            
  },
    "click .tag-filter": function(e) {
      e.preventDefault();
      var selectedTag = $(e.target).text();      
      // console.log($(e.target).text());           
  }
});

