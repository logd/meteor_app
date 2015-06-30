Posts = new Mongo.Collection('posts');
Posts.initEasySearch(['title','content'], {
  'limit' : 20,
  'use' : 'mongo-db'
});


Meteor.methods({
  postInsert: function(postAttributes){
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      // ,
      // content: String,
      tags: Match.Optional([String])
    });

    var user = Meteor.user();

    var post = _.extend(postAttributes, {
      authorId: user._id,
      authorName: user.username,
      createdAt: new Date()
    });

     if(Logd.posts.notEmpty(postAttributes.title)){

       var postId = Posts.insert(post);

       return {
         _id: postId
       };

     };
  },

  updatePost: function(postAttributes){

    check(Meteor.userId(), String);
    check(postAttributes, {
      postId: String,
      content: String,
      tags: Match.Optional([String])
    });

    var post = Posts.findOne({_id: postAttributes.postId });

    // Validation: post content is not empty, current user is post author
    if(Logd.posts.notEmpty(postAttributes.content)
       && post.authorId === Meteor.user()._id)
    {

      Posts.upsert(postAttributes.postId, {
        $set:
        { 
          content: postAttributes.content, updatedAt: new Date(),
          tags: postAttributes.tags, updatedAt: new Date()       
        }
      });     
    };
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