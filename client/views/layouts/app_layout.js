Template.AppLayout.events({
  "click .app-nav-toggle": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  }
});
