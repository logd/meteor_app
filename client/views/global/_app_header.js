Template.app_header.helpers({
  headerLeft: function () {
    return LogdAppHeader[Router.current().route.getName()].headerLeft;
  },
  headerCenter: function () {

    // TODO: Create a global 'current_view' helper
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
  
      var postAttributes = {
        title: "New Post",
        newPost: true
      };

      Meteor.call('createPost', postAttributes, function(error, result){
        if (error){
          alert(error.reason);
        } else {
          Session.set("hasContent", false);
          Logd.posts.setPostTitle(result._id,result.title);

          Router.go('edit_post', {_id: result._id});
        };
      });
    
  },
    "click .edit-post": function(event) {
      event.preventDefault();
        Router.go('edit_post', {_id: Router.current().params._id});
  },
    "click .done-editing": function(event) {
      event.preventDefault();
      Router.go('show_post', {_id: Router.current().params._id});
  },
    "click .back-to-previous": function (e,t) {
      e.preventDefault();

      var current_view = Router.current().route.getName();
    
      switch (current_view){
        case 'show_post':
          Router.go('home');
          break;    

        case 'edit_post':
          // delete a new post that was abandoned
          if(Session.get("hasContent") === false){
            var postId = Router.current().params._id;
            Meteor.call('deletePost', postId, function (error, result) {
              if (error){ alert(error.reason);} 
            });
          };

          Router.go('home');
          break;   

        default: 
          history.back();
      };
  },
    "click .search": function (e,t) {
      e.preventDefault();
      Router.go('search_results');
    }
});
