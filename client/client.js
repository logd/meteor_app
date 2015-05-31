Meteor.subscribe("posts");

  // Template.posts.helpers({
  //   beforeRemove: function(){
  //     return function (collection, id) {
  //         if(confirm("Really delete this post?")){
  //           this.remove();
  //         }
  //     };
  //   }
  // });
  // Meteor.marked.setOptions({
  //   smartypants: true
  //   });


  // Template.body.helpers({
  //   posts:
  // })

  // Template.newPost.events({
  //   "submit .new-post-form": function(event){

  //     var postContent = event.target.content.value;

  //     Meteor.call('newPost', postContent);

  //     event.target.content.value = "";

  //     return false
  //   }
  // });

  // Template.body.helpers({
  //   posts:
  // })