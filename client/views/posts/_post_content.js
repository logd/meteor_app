Template.post_content.onRendered(function(){
  // $('.autosize').autosize();
  this.$('.post-content').focus();
});

Template.post_content.helpers({
  // newPost: function(){
  //   return Session.get("newPost");
  // }
})

Template.post_content.events({
  "keyup .has-content": function(event){
     var content = event.target.value;

      if(Logd.posts.hasContent(content)){
         Session.set('hasContent', true);
  
      } else {
        Session.set('hasContent', false);
      };
  }
  ,
  "keyup .create-on-return": function(e,t){
    console.log(e.target.value);
    

    if(e.which === 13){
      console.log("you hit return");
      var postContent = e.target.value;
      var postTitle = Logd.posts.getFirstLine(postContent);
      var postTags = Logd.tags.getHashTags(postContent);

      var postAttributes = {
        title: postTitle,
        content: postContent,
        tags: postTags
      };

      Meteor.call('createPost', postAttributes, function(error, result){

        if (error){
          alert(error.reason);
        }  else {
           Session.set("newPost", false);
           Router.go('edit_post', { _id: result._id });
        }

      });
    };
  }
  // ,

  // "input .auto-save": function(event,template){
  //   // Session.set('saving', 'Saving...');
  //   // var pauseTimer = Meteor.setTimeout(saveChanges(), 2000);

  //   Logd.posts.saveChanges(event, Router.current().params._id);


  // // Save whenever the user pauses typing for 2 seconds or more
  // // on keyup, reset and start new pauseTimer
  // // if pauseTimer ends, save changes

  // // var typingPause = 2000;

  // // // Save every 5 seconds if typing continuously
  // // var autoSave = Meteor.setInterval(saveChanges(), 5000);
  // // Meteor.clearInterval(autoSave);


  //   // Logd.posts.autoSave(content);
  //   // var code = event.keyCode || event.which;

  //   // if(code === 13 && Logd.posts.hasContent(postContent)){
  //   //   var postTitle = Logd.tags.getFirstLine(postContent);
  //   //   var postTags = Logd.tags.getHashTags(postContent);

  //   //   var postAttributes = {
  //   //     new_post: false,
  //   //     title: postTitle,
  //   //     content: postContent,
  //   //     tags: postTags
  //   //   };

  //   //   Meteor.call('postInsert', postAttributes, function(error, result){

  //   //     if (error){
  //   //       alert(error.reason);
  //   //     }

  //   //   });
  //   // }
  // }
});


// FROM SUBTITLES:
//   'input textarea' : function( e , t){

//       t.span.textContent = t.area.value;
//       Session.set('saving', 'Saving...');
//       // Save user input after 3 seconds of not typing
//       saveTimer.clear();

//       if (t.data.saved) {
//         Subtitles.update(t.data._id, {$set : { saved : false }});
//       }

//       saveTimer.set(function() {
//         updateForm();
//      });
//   },


//   // Autosave Timer
// var saveTimer = function(){
//   var timer;
//   this.set = function(saveFormCB) {
//     timer = Meteor.setTimeout(function() {
//       saveFormCB();
//     }, 3000);
//   };
//   this.clear = function() {
//     Meteor.clearInterval(timer);
//   };
//   return this;
// }();


  // ,"blur .post-content" : function(e,t){
  // var postContent = $('.post-content').val();
  // console.log(postContent);

  // var postTags = Logd.tags.getHashTags(postContent);

  // var postAttributes = {
  //   postId: Router.current().params._id,
  //   content: postContent,
  //   tags: postTags
  // };

  // Meteor.call('updatePostContent', postAttributes, function(error, result){
  //   if (error){
  //     alert(error.reason);
  //   };
  // });

  //   Session.set('editingPostContent', false);

  // }
  // ,