Template.app_header.helpers({
  headerLeft: function () {
    // var current_view = ;
    return LogdAppHeader[Router.current().route.getName()].headerLeft;
  },
    isHomePage: function () {
     return Router.current().route.getName() === 'home';
  }, 
  pageTitle: function () {
    var current_view = Router.current().route.getName();
    return LogdPageTitle[current_view];
  },
  headerRight: function () {
    return LogdAppHeader[Router.current().route.getName()].headerRight;
},
  newPost: function () {
    return LogdButtons.newPost;
  },
    showRightButton: function() {
      if(Router.current().route.getName() === 'edit_post'){
        return Session.get("hasContent");
      } else {
        return true;
      };
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
  "click .back-to-previous": function (e,t) {
    e.preventDefault();
    if (!Session.get('hasContent') && Router.current().route.getName() === 'edit_post') {
      Meteor.call("deletePost", Router.current().params._id);
    };
    Router.go('home');
  }
});
