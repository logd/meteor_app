Posts = new Mongo.Collection('posts');

Meteor.methods({
  newPost: function(postContent){
    Posts.insert({
      content: postContent,
      createdAt: new Date()
    });
  },
  updatePost: function(postId, postContent){
    Posts.update({_id: postId}, { $set: { content: postContent, updatedAt: new Date()} });
  },
  deletePost: function(postId){
    Posts.remove(postId);

    // only allow owner to check off a private task
    // if (task.private && task.owner !== Meteor.userId()) {
    //   throw new Meteor.error("not-authorized");
    // }

    // if(confirm("Delete this task?")) {
      // Tasks.remove(taskId);
    // }
  }
});
