  Template.posts.helpers({
    allPosts: function() {
      return Posts.find({}, {sort: {createdAt: -1}})
    }
  });
