Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc){
    return !! userId;
  },
    update: function(userId, doc){
    return !! userId;
  },
    remove: function(userId, doc){
    return !! userId;
  }

});
Posts.initEasySearch(['title','content'], {
  'limit' : 20,
  'use' : 'mongo-db'
});

// this.Pages = new Meteor.Pagination("paginate_posts", {
//   itemTemplate: "posts_list",
//   perPage: 20,
//   sort: {
//     title: 1
//   },
//   filters: {
//     count: {
//       $gt: 10
//     }
//   },
//   availableSettings: {
//     perPage: true,
//     sort: true
//   }
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
    // var post_tags;
    
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

      post_tags = postAttributes.tags;

    }

    return post_tags;
  }
 ,
  deletePost: function(postId){
    check(Meteor.userId(), String);
    check(postId, String);
    Posts.remove(postId);
  }
});