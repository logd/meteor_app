Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes){
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      content: String,
      tags: Match.Optional([String])
    });

    var user = Meteor.user();

    var post = _.extend(postAttributes, {
      authorId: user._id,
      authorName: user.username,
      createdAt: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
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
    check(Meteor.userId(), String);
    check(postId, String);
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