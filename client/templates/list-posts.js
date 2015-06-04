Template.posts.created = function(){
  this.whichPost = new ReactiveVar(false);
};

// Template.post.onCreated(function() {
//   this.editable = new ReactiveVar;
//   this.editable.set(this.data.color1);
// });
// Session.set(key, value);
 // Session.set("editable", false);

Template.posts.helpers({
  allPosts: function() {
    return Posts.find({}, {sort: {createdAt: -1}});
  },
  makeEditable: function(){
    // console.log(currentlyEditing);

   return this._id === Template.instance().whichPost.get();
  }
  // ,
  //  editMode:function(){
  //   return this.instance().editMode.get();
  // }
});

Template.posts.events({
  "click .delete": function() {

    if (confirm("Are you sure?")) {
       Meteor.call("deletePost", this._id);
    }
  },
  'click .edit' : function(){
    Template.instance().whichPost.set(this._id);
  }

});