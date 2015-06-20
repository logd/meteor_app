Template.AppLayout.events({
  "click .app-nav-toggle button": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  }
});
