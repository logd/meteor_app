Template.new_post.onRendered(function(){
    // $('.autosize').autosize();

 this.$("form").on("submit", function (e) { e.preventDefault() });
   // this.$('#post-title').focus();

   // $("#post-form").on("submit", function(e) {e.preventDefault()});

    // if(input){
    //     input.focus()
    // }
});

Template.new_post.events({
  "submit form": function(event) {
    event.preventDefault();
    console.log("Form submitted");
    return false;
  }
});


// Template.new_post.helpers({
//   postTitleHasContent: function() {
//     return Session.get('postTitleHasContent');
//   }
//   // ,
//   // editPostTitle: function(){
//   //   return Session.get('editPostTitle');
//   // }
// });

// Template.new_post.events({
//   "submit #post-form": function(e) {
//      e.preventDefault();
//       window.history.back();
//     // event.preventDefault();
//     console.log("you tried submitting the form");
//      // return false;
//   }
//   // "keyup .has-content": function(e,t){
//   //   e.preventDefault();
//   //   var postTitle = e.target.value;

//   //   if(Logd.posts.notEmpty(postTitle)){
//   //     Session.set('postTitleHasContent', true);
//   //   } else {
//   //     Session.set('postTitleHasContent', false);
//   //   };
//   // }
//   // ,
//   "keyup .create-post": function(e,t){
//     e.preventDefault();
//     var postTitle = e.target.value;
//     console.log(postTitle);
//     // var postTitle = e.target.value;
//     var code = e.keyCode || e.which;
    
//    if(e.which === 13){
//     console.log("you hit return");
//     //  var postTags = Logd.tags.getHashTags(postTitle);
//     //  console.log("tags: " + postTags);
  
//     // var postAttributes = {
//     //   title: postTitle,
//     //   tags: postTags
//     // };

//     // Meteor.call('postInsert', postAttributes, function(error, result){
//     //   if (error){
//     //     alert(error.reason);
//     //   } else {
//     //     // Iron.controller().state.set('editPostTitle', false);
//     //     // Iron.controller().state.set('postHasContent', false);
//     //     Router.go('edit_post', { _id: result._id });
//     //   }
//     // });
//    }
//   }
//   // ,
//   // "click .click-create-post": function(e,t){
//   //   e.preventDefault();
//   //   var postTitle = $('#post-title').val();    
//   //    var postTags = Logd.tags.getHashTags(postTitle);
     
//   //   var postAttributes = {
//   //     title: postTitle,
//   //     tags: postTags
//   //   };

//   //   Meteor.call('postInsert', postAttributes, function(error, result){
//   //     if (error){
//   //       alert(error.reason);
//   //     } else {
//   //       Router.go('edit_post', { _id: result._id });
//   //     }
//   //   });
   
//   }
// });
 

