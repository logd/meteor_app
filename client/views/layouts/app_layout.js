Template.AppLayout.onCreated(function () {
  // this.isEditing = new ReactiveVar(false);

  // register this template within some central store
  // GalleryTemplates.push(this);
  // PostTemplates.push(this);

});

Template.AppLayout.helpers({
    isEditing: function() {
    return Session.get("isEditing");
  },
    postHasContent: function() {
    return Session.get("postHasContent");
  }
});

Template.AppLayout.events({
  "click .app-nav-toggle button": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  },
  "click .done-editing" : function(e,t){
    

    Router.go('show_post', {_id: Router.current().params._id });
  },
  "click .edit": function(e,t){
    // Session.set({
    //   "isEditing": true,
    //   "postHasContent":true
    // });
    
    Router.go('edit_post', {_id: Router.current().params._id });
  },
    "click .delete": function() {

    if (confirm("Are you sure?")) {
       Meteor.call("deletePost", Router.current().params._id);
        Router.go('new_post');
    }
  }
});