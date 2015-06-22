Posts = new Mongo.Collection('posts');

Posts.initEasySearch(['content'], {
  'limit': 20,
  'use' : 'mongo-db'
});

Meteor.methods({
  createPost: function(postContent,postTitle, postContentTags){
    Posts.insert({
      title: postTitle, 
      content: postContent ,
      authorId: Meteor.userId(),
      createdAt: new Date(),
      tags: postContentTags
    });
  },
  updatePost: function(postId, postContent, postTitle){
    Posts.update({ _id: postId }, { 
      $set: { 
        content: postContent, updatedAt: new Date(),
        title: postTitle, updatedAt: new Date()
      }
    });
  },
  deletePost: function(postId){
    Posts.remove(postId);
  }
});


      // Posts.insert({
      //   content: postContent,
      //   createdAt: new Date()
      // });
 
    // if(postContentTags.length > 0){
    //   Posts.insert({
    //     content: postContent,
    //     createdAt: new Date(),
    //     { $push: postContentTags }
    //   })
    // } else {

    //   Posts.insert({
    //     content: postContent,
    //     createdAt: new Date()
    //   });
    // };

        // only allow owner to check off a private task
    // if (task.private && task.owner !== Meteor.userId()) {
    //   throw new Meteor.error("not-authorized");
    // }

    // if(confirm("Delete this task?")) {
      // Tasks.remove(taskId);
    // }