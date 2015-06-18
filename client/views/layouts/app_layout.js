Template.AppLayout.events({
  "click .sidebar-toggle": function(e,t){
  e.preventDefault();
  t.$(".app-container").toggleClass("toggled");
  }
});
