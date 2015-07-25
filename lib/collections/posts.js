Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc){
    return !! userId;
  },
  update: function(userId, doc){
    // check that user is signed in and user is the author
    return (!! userId) && (doc.authorId === userId);
  },
  remove: function(userId, doc){
    return (!! userId) && (doc.authorId === userId);
  }

});
Posts.initEasySearch(['title','content'], {
  'limit' : 20,
  'use' : 'mongo-db'
});

Meteor.methods({

  createPost: function(postAttributes){
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      newPost: Boolean
    });

    var userId = Meteor.userId();
    var shortenedPostTitle = LogdPosts.shortenedTitle(postAttributes.title);

    var post = _.extend(postAttributes, {
      shortenedTitle: shortenedPostTitle,
      authorId: userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    var postId = Posts.insert(post);

     return {
       _id: postId,
       title: post.title
     };

  },
  updatePost: function(postAttributes){
    check(Meteor.userId(), String);
    check(postAttributes, {
      postId: String,
      // title: String,
      // shortenedTitle: String,
      content: String
      ,
      tags: Match.Optional([String])
    });

    var post = Posts.findOne({_id: postAttributes.postId });
    var postTitle = LogdPosts.getFirstLine(postAttributes.content);
    var shortenedPostTitle = LogdPosts.shortenedTitle(postTitle);
    // var postTags = LogdTags.getTags(postAttributes.content);
    // console.log("postTags: " + postTags);

    if(LogdPosts.hasContent(postAttributes.content)
       && post.authorId === Meteor.user()._id)
    {

      Posts.upsert(postAttributes.postId, {
        $set:
        { 
          title: postTitle,
          shortenedTitle: shortenedPostTitle,
          content: postAttributes.content,
          tags: postAttributes.tags,
          updatedAt: new Date(),
          newPost: false      
        }
      });

      // var postTags = postAttributes.tags;

    }
    if(postAttributes.tags != undefined) {
      return { tags: postAttributes.tags};
    } else {
      return { tags: []};
    }
  }
  ,
  deletePost: function(postId){
    check(Meteor.userId(), String);
    check(postId, String);
    Posts.remove(postId);
  }
});