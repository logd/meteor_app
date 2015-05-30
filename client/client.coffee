# Session.setDefault 'counter',0

# Template.hello.helpers counter: ->
#   Session.get 'counter'

# Template.hello.events 'click button': ->
#   # increment the counter when button is clicked
#   Session.set 'counter', Session.get('counter') + 1
#   return

Template.postForm.events ->
  'click button#saveForm': (evt) ->
    evt.preventDefault()
    postContent = $('input[id=post-content]').val()
    PostsCollection.insert({content:postContent})

Template.postsList.helpers posts: ->
  PostsCollection.find()

Accounts.ui.config passwordSignupFields: "USERNAME_ONLY"