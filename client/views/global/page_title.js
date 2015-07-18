Template.page_title.helpers({
  pageTitle: function () {

    // This is purely based on the current router name but for edit post, the title value may change while in the same route
  
    switch (Router.current().route.getName()){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      case 'edit_post':
        var postId = Router.current().params. _id;
        var postTitleId = "postTitle-" + postId;
        var thisPostTitle = Session.get(postTitleId);

        // BUG: TITLE VALUE BEING PASSED HERE IS 'UNDEFINED'
        // 1. get content from post-content?, 2. if this.title is empty, return 'Untitled post', 3. else return shortenedTitle
        // var content = Template.instance().edit_post.find('.post-form textarea').value;
        // console.log("edit post title: " + this.title);
        // var title = Logd.posts.getTitle(this.title);
        // return Logd.posts.shortenedTitle(title);
        // var post = Posts.findOne({_id: Router.current().params._id});
        // var title = post.title;
        // // var content = Session.get("postContent");
        // console.log("Edit post title: " + title);
        // // return Logd.posts.shortenedTitle(title);

        // if(Logd.posts.hasContent(title)){
        //   return Logd.posts.shortenedTitle(title);
        // } else {
        //   return "Edit Post";
        // }

        return Logd.posts.shortenedTitle(thisPostTitle);
    
      case 'show_post':

        // BUG: How do I get the title value here?
        //I am passing it in the show_post controller data context so it seems this.title should work
        console.log("show title: " + this.title);
         return Logd.posts.shortenedTitle(this.title);

      case 'tags_list':
        return "My Topics";

      default: 
        return "Logd";
    };
  }
   // shortenedTitle: function() {

  //   // DEBUG: is this the culprit here?
  //   // need to maybe get the shortened title as a template helper instead
  //   var current_view = Router.current().route.getName();
  //   if(current_view === 'edit_post' || current_view === 'show_post' ){
  //     return Logd.posts.shortenedTitle(this.title);
  //   } else {
  //     return false;
  //   }
    
  // }
});
