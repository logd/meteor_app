Template.app_header.helpers({
  headerLeft: function () {
    return LogdAppHeader[Router.current().route.getName()].headerLeft;
  },
  headerRight: function () {
    return LogdAppHeader[Router.current().route.getName()].headerRight;
  },
  isHomePage: function () {
     return Router.current().route.getName() === 'home';
  }, 
  pageTitle: function () {
    var current_view = Router.current().route.getName();

    switch (current_view){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      case 'edit_post':
        return this.title;

      case 'show_post':
        return this.title;

      case 'tags_list':
        return "My Tags";

      default: 
        return "Logd";
    };
  },
  shortenedTitle: function() {
    return Logd.posts.shortenedTitle(this.title);
  },
    saveNotice: function() {
    if(Session.get("hasContent")){
      return Session.get('saveNotice');
    }
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
  },
    disableCreate: function(){
    if (Session.get("disableCreate")) {
      return "disabled";
    } else{
       return "";
    };
  }
});

Template.app_header.events({
  "click .tags-list": function(event) {
    event.preventDefault();
    Router.go('tags_list');
  },
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
    
  },

  "click .back-to-previous": function (e,t) {
    e.preventDefault();
    if (!Session.get('hasContent') && Router.current().route.getName() === 'edit_post') {
      Meteor.call("deletePost", Router.current().params._id);
    };
    Router.go('home');
  }
});
