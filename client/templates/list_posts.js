Template.posts.onCreated(function () {
  // set up local reactive variables
  this.currentlyEditing = new ReactiveVar(null);

  // register this template within some central store
  // GalleryTemplates.push(this);
});

// Template.posts.created = function(){
//   // this.isEditable = new ReactiveVar(false);
//   // this.state = new ReactiveDict;
//   // this.state.set('currentPostDetail', null);
//   // // Meteor.subscribe('posts');
// };

// // Template.post.onCreated(function() {
// //   this.editable = new ReactiveVar;
// //   this.editable.set(this.data.color1);
// // });
// // Session.set(key, value);
//  // Session.set("editable", false);

Template.posts.helpers({
  allPosts: function() {
    return Posts.find({}, {sort: {createdAt: -1}});
  },
  isEditable: function() {
    // this.makeEditable.depend();
    // return Template.instance().isEditable.get();

    // return true or false
    return this._id === Template.instance().currentlyEditing.get();
}

  // ,
  // makeEditable: function(){
  //   // console.log(currentlyEditing);

  //  return this._id === Template.instance().whichPost.get();
  // }
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
   'click .edit' : function(event, template){
    // Template.instance().isEditable.set(true);
    Template.instance().currentlyEditing.set(this._id);
 
  },
    "click .cancel": function(event,template) {
    Template.instance().currentlyEditing.set(null);
  }
  // ,
  // 'click .edit' : function(){
  //   Template.instance().whichPost.set(this._id);
  // }

});