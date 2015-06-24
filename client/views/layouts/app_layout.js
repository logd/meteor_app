Template.AppLayout.onCreated(function () {
  // this.isEditing = new ReactiveVar(false);

  // register this template within some central store
  // GalleryTemplates.push(this);
  // PostTemplates.push(this);

});

Template.AppLayout.helpers({
  // isEditing: function(){
  //    // return PostTemplates.isEditing.get();
  //   // return value of reactive var for this
  // }
    isEditing: function() {
      // return true;
      //  
    return Session.get("isEditing");
  },
    postHasContent: function() {
      // return true;
      //  
    return Session.get("postHasContent");
  }
});

Template.AppLayout.events({
  "click .app-nav-toggle button": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  },
  "click .done" : function(e,t){
    // var postContent = $("#postContent").val();
    // var hashtagPattern = /#[A-Za-z0-9_]*/gi;

    // function removeFirstChar(str){
    //   return str.substr(1, str.length);
    // };
    // var rawTags = tags = [];
    // var postTags = _.map(rawTags, function(tag) {
    //       return removeFirstChar(tag);
    //     })
    // var contentLines = postContent.split("\n");
    // var postTitle = ( contentLines[0].length > 50  ?  contentLines[0].substring(0,50) : contentLines[0] );
    
    // // var post = {
    // //   title: postTitle, 
    // //   content: postContent,
    // //   tags: postTags
    // // };
    // Meteor.call('createPost', postContent, postTitle, postTags, function(error, result){
    //     if(error){
    //       return alert(error.reason);
    //     } else {
    //        // Router.go('show_post', {_id: result._id });
    //        console.log(result);
    //     };       
  
    // });
    //     Router.go('show_post', post);
    // Meteor.call('createPost', postContent, postTitle, tags);
     // need to wait for and pass in the id for this post
    
  }
});