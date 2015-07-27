Template.posts_list.onCreated(function(){

    // var self = this;

    // $(window).scroll(function() {
    //   if ($(this).scrollTop() == 0) {
    //     $('.app-header').css({
    //         'box-shadow': 'none',
    //         '-moz-box-shadow' : 'none',
    //         '-webkit-box-shadow' : 'none' });
    //   } else {
    //     $('.app-header').css({
    //        'box-shadow': '0px 8px 8px #444444',
    //        '-moz-box-shadow' : '0px 8px 8px #444444',
    //        '-webkit-box-shadow' : '0px 8px 8px #444444' });
    //   }
    // });
});



Template.posts_list.helpers({
  totalPostCount: function() {
    var postCount = Counts.get('posts-counter');

    if(postCount == 1){
      return "1 post";
    } else {
      return postCount + " posts";
    }
    // return Counts.get('posts-counter');
  },
  displayPostsList: function() {
    if (Counts.get('posts-counter') > 0){
      return true;
    } else {
      return false;
    };
  }
});

Template.posts_list.events({
  "click .create-post": function(event) {
    event.preventDefault();
    LogdPosts.createPost();  
  },
  "click .delete": function(event) {
    event.preventDefault();
    if (confirm('Really delete this post')) { 
      Meteor.call("deletePost", this._id);
    };
  },
    "keyup .update-post-content": function(event) {
      var postContent = event.target.value;      
      Meteor.call('updatePost', postId, postContent);            
  },
    "click .tag-matches": function(e) {
      //TODO: refactor: this is the same that is used for tags_list
      e.preventDefault();
      var selected_tag =  $(e.target).text();
      Router.go('tag_matches', { tag: selected_tag });          
  },
    "click .show-post": function(e,t){
  // TODO: reference specific template rather than use global
  $(".app-container").toggleClass("toggled");
  }
});

