  // Template.body.onRendered(function(){
  //   // this.$('#app-menu').sidebar('attach events', '.launch.button');
  // });

  Template.body.events({
    "click .sidebar-toggle": function(e,t){
      e.preventDefault();
      t.$("#wrapper").toggleClass("toggled");
    }
  });

