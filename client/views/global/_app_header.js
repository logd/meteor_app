Template.app_header.helpers({
  headerLeft: function () {
    var current_view = Router.current().route.getName();

    // console.log(current_view)
    // console.log("Header Left: " + LogdAppHeader.current_view.headerLeft)
    return LogdAppHeader[current_view].headerLeft;
  },
    currentPage: function () {
     return Router.current().route.getName();
  }, 
  pageTitle: function () {
    var current_view = Router.current().route.getName();
    return LogdPageTitle.current_view;
  },
  headerRight: function () {
   var current_view = Router.current().route.getName();
    return LogdAppHeader[current_view].headerRight;
},
  newPost: function () {
    return LogdButtons.newPost;
  }
});

Template.app_header.events({
  "click .create-post": function(event) {
    event.preventDefault();
    // Session.set("disableCreate", true);
  
      var postAttributes = {
        title: "New Post"
      };

      Meteor.call('createPost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Session.set("hasContent", false);
          Router.go('edit_post', {_id: result._id});
          // Session.set("disableCreate", false);
        };
      });
    // };     
  },
  "click .back-to-home": function (e,t) {
    e.preventDefault();
    if (!Session.get('hasContent') && Router.current().route.getName() === 'edit_post') {
      Meteor.call("deletePost", Router.current().params._id);
    };
    Router.go('home');
  }
});
