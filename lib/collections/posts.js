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

  updatePost: function(postAttributes){

     // TODO: refactor - this is being used both here and in Insert
     // TODO: only allow matching authorId to update
     //TODO: check that postContent is nonEmpty

    check(Meteor.userId(), String);

    // AuthorMatchesCurrentUser = Match.where(function(user){
    //   post = Posts.findOne({_id: postAttributes.postId });

    //   if(post.authorId === Meteor.userId()){
    //     return true
    //   }
    //   // can likely also be written return post.authorId === Meteor.userId();
    //   // TODO: else return an error and reason      
    // });

    // check(user, AuthorMatchesCurrentUser);

    check(postAttributes, {
      postId: String,
      title: String,
      content: String,
      tags: Match.Optional([String])
    });


    Posts.upsert(postAttributes.postId, { 
      $set: { 
        content: postAttributes.content, updatedAt: new Date(),
        title: postAttributes.title, updatedAt: new Date()

        // TODO: add this after regular updating is working
        // ,
        // tags: postAttributes.tags, updatedAt: new Date()
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