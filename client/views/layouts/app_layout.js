Template.AppLayout.onCreated(function () {
  this.isEditing = new ReactiveVar(false);

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
  }
});


//consider renaming this to PostLayout, since that is what it is
// add helpers for: editing, return true or false