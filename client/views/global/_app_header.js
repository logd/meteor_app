Template.app_header.helpers({
  headerLeft: function () {
    return LogdAppHeader[Router.current().route.getName()].headerLeft;
  },
  headerCenter: function () {

    var current_view = Router.current().route.getName();
  
    switch (current_view){
      case 'home':
        return "user_nav";      

      case 'login':
        return "page_title";

      case 'tag_matches':
        return "page_title";

      case 'edit_post':
        return "page_title";

      case 'show_post':
        return "page_title";

      case 'tags_list':
        return "page_title";

      case 'search_results':
         return "search_form";   

      default: 
        return "page_title";
    };
  },
  headerRight: function () {

    return LogdAppHeader[Router.current().route.getName()].headerRight;
  },

  // shortenedTitle: function() {
  //   var current_view = Router.current().route.getName();
  //   if(current_view === 'edit_post' || current_view === 'show_post' ){
  //     return Logd.posts.shortenedTitle(this.title);
  //   } else {
  //     return false;
  //   }
    
  // },
  //   saveNotice: function() {
  //   if(Session.get("hasContent")){
  //     return Session.get('saveNotice');
  //   }
  // },
  // newPost: function () {
  //   return LogdButtons.newPost;
  // },
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
  },

  "click .search": function (e,t) {
    e.preventDefault();
    Router.go('search_results');
  }
});
