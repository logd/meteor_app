  Meteor.subscribe("posts");

  Template.posts.helpers({
    allPosts: function() {
      return Posts.find({}, {sort: {createdAt: -1}})
    }
  });

  // Template.body.helpers({
  //   posts:
  // })

  Template.newPost.events({
    "submit .new-post-form": function(event){

      var postContent = event.target.content.value;

      Meteor.call('newPost', postContent);

      event.target.content.value = "";

      return false
    }
  });

// Meteor.subscribe("posts")

// Template.body.helpers listPosts: ->
//   Posts.find()

// Template.body.events "submit .new-post": (event) ->
//   postContent = event.target.content.value

//   Meteor.call('addPost', postContent)


// # Template.postForm.events ->
// #   'click button#saveForm': (evt) ->
// #     evt.preventDefault()
// #     postContent = $('input[id=post-content]').val()
// #     PostsCollection.insert({content:postContent})

// Template.postsList.helpers posts: ->
//   PostsCollection.find()

// Meteor.methods addPost: (postContent) ->
//   Posts.insert
//     content: postContent


