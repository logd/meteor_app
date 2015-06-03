// Template.posts.created=function(){
//   this.editMode=new ReactiveVar(false);
// };
// Session.set(key, value);
 // Session.set("editable", false);

Template.posts.helpers({
  allPosts: function() {
    return Posts.find({}, {sort: {createdAt: -1}});
  }

  // editable: function(){
  //  return Session.get("TargetValue" + this._id);
  // }
  // ,
  //  editMode:function(){
  //   return this.instance().editMode.get();
  // }
});

Template.post.onCreated(function() {
  this.editable = new ReactiveVar;
  this.editable.set(this.data.color1);
});

Template.posts.events({
  "click .delete": function() {

    if (confirm("Are you sure?")) {
       Meteor.call("deletePost", this._id);
    }
  },
  'click .editable' : function(event){

     // Session.set("editable", true);

    // console.log("content: " + this.content);

      // return Session.set("TargetValue" + t.data._id,true)//hide the span and we set the input 
  }
});