Posts = new Mongo.Collection('posts');
// Posts.initEasySearch(['title','content'], {
//   'limit' : 20,
//   'use' : 'mongo-db'
// });


Meteor.methods({
    createPost: function(postAttributes){
    check(Meteor.userId(), String);
    check(postAttributes, {
      // newPost: Boolean,
      title: String
      // content: String,
      // tags: Match.Optional([String])
    });

    var userId = Meteor.userId();

    var post = _.extend(postAttributes, {
      authorId: userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

     var postId = Posts.insert(post);

     return {
       _id: postId
     };

  },
  updatePost: function(postAttributes){

    check(Meteor.userId(), String);
    check(postAttributes, {
      postId: String,
      title: String,
      content: String,
      tags: Match.Optional([String])
    });

    var post = Posts.findOne({_id: postAttributes.postId });

    // Validation: post content is not empty, current user is post author
    if(Logd.posts.hasContent(postAttributes.content)
       && post.authorId === Meteor.user()._id)
    {

      Posts.upsert(postAttributes.postId, {
        $set:
        { 
          title: postAttributes.title,
          content: postAttributes.content,
          tags: postAttributes.tags,
          updatedAt: new Date()       
        }
      }); 

        // Meteor.call('addTags', tags, function(error, result){
        //   if (error){
        //     alert(error.reason);
        //   }
        // };

    }
  }
 ,
  deletePost: function(postId){
    check(Meteor.userId(), String);
    check(postId, String);
    Posts.remove(postId);
  }
});