Template.edit_post.onRendered(function(){
    // $('.autosize').autosize();

   this.$('.post-content').focus();

    // if(input){
    //     input.focus()
    // }
});

Template.edit_post.helpers({
});

Template.edit_post.events({
  // "input .post-form" : function(e, t){
  //   var postContent = $('#postContent').val();

  //   // on input, every 3 seconds, save changes

  //   // Session.set('save-notice', "Saving changes...");

  //   var autoSaveInterval = function(){
  //     var timer;

  //     this.set = function(saveForm) {
  //       timer = Meteor.setTimeout(function() {
  //         // saveFormCB();
  //         Meteor.call(
  //           'updatePost',
  //           postAttributes,
  //           function(error, result){
  //             if (error){ alert(error.reason);}
  //           });
  //         }, 3000)
  //     };

  //     this.clear = function() {
  //       Meteor.clearInterval(timer);
  //     };

  //       return this;    
  //   }();

  //    // Save user input after 3 seconds of not typing
  //   autoSaveInterval.clear()

  //   autoSaveInterval.set(function() {   
  //     // We should update our document. 
  //     // If update is successful, then
  //     // Session.set('saving', 'All Changes Saved.'); 
  //  });


  //   //
  //   // edit icon should switch to done icon
  //   // want to support all the same functionality as for new post here, except the Meteor call will be to upsert
  //   // do I want to explore

  // }
});
 

