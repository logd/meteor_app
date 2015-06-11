Meteor.publish "posts", ->
  Posts.find()

Meteor.publish "tags", ->
  Tags.find()