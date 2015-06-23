Template.AppLayout.onCreated(function () {
  // this.currentlyEditing = new ReactiveVar(null);

  // register this template within some central store
  // GalleryTemplates.push(this);
});



Template.AppLayout.events({
  "click .app-nav-toggle button": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  }
});
