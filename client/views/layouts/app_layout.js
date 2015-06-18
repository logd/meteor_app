Template.AppLayout.onRendered(function(){

    // this.$('#foo').sidebar('toggle');

    // this.$('.sidebar').sidebar('toggle');

    // SEMANTIC UI Components
    // this.$(".dropdown").dropdown();

    // this.$('#sidebar').sidebar('attach events', '#sidebar-button');

  });

Template.AppLayout.events({
    "click .sidebar-toggle": function(e,t){
      e.preventDefault();
      t.$(".app-container").toggleClass("toggled");
    }

    // "click .ui.sidebar": function(e,t){
    //   e.preventDefault();
    //   t.sidebar('attach events', '.launch.button');
    // }
  });


  // Template.body.onRendered(function(){


    // this.$('.sidebar').sidebar('toggle');
    // this.$('#app-menu-button').sidebar('toggle');
    
    // this.$('.left.demo.sidebar').first().sidebar('attach events', '.toggle.button');

    // this.$('.toggle.button').removeClass('disabled');
    // this.$('#app-menu').sidebar('toggle');

 

    // this.$(".dropdown").dropdown();

  // });
