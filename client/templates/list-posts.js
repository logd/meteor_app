Template.posts.helpers({
  allPosts: function() {
    return Posts.find({}, {sort: {createdAt: -1}})
  }
});

Template.posts.events({
  "click .delete": function() {

    if (confirm("Are you sure?")) {
       Meteor.call("deletePost", this._id);
    }
  }
});
    // we must remove each item individually from the client
    // Todos.find({listId: list._id}).forEach(function(todo) {
    //   Todos.remove(todo._id);
    // });
      
   
 
 // "click .delete": function () {

 //      // DELETE
 //      Meteor.call("deleteTask", this._id);

 //      // was Tasks.remove(this._id);
 //    },
  // var message = "Are you sure you want to delete the list " + list.name + "?";
  // if (confirm(message)) {
  //   // we must remove each item individually from the client
  //   Todos.find({listId: list._id}).forEach(function(todo) {
  //     Todos.remove(todo._id);
  //   });