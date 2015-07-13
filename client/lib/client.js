Meteor.startup(function () {
  Session.setDefault({
    "disableCreate": false
  })
});

Meteor.subscribe("posts");
Meteor.subscribe("tags");
Meteor.subscribe("userData");

UI.registerHelper('appHeaderCenter', function() {
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
        return "My Topics";

      case 'search':
        return false;

      default: 
        return "Logd";
    };

});

// Template.body.onRendered(function(){

// });

// Template.home.onRendered(function(){

// });


 // Template.body.helpers({
 //  // current_user: function(){
 //  //     return Meteor.user();
 //  //   }
 //  });