Posts = new Mongo.Collection('posts');

Meteor.methods({
  newPost: function(postContent){
    Posts.insert({
      content: postContent,
      createdAt: new Date()
    });
  }
});