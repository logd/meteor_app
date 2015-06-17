Template.AppLayout.onRendered(function(){

    // this.$('#foo').sidebar('toggle');

    // this.$('.sidebar').sidebar('toggle');

    // SEMANTIC UI Components
    // this.$(".dropdown").dropdown();

  });

Template.AppLayout.events({
    "click .sidebar-toggle": function(e,t){
      e.preventDefault();
      t.$("#wrapper").toggleClass("toggled");
    }
  });


  // Template.body.onRendered(function(){


    // this.$('.sidebar').sidebar('toggle');
    // this.$('#app-menu-button').sidebar('toggle');
    
    // this.$('.left.demo.sidebar').first().sidebar('attach events', '.toggle.button');

    // this.$('.toggle.button').removeClass('disabled');
    // this.$('#app-menu').sidebar('toggle');

 

    // this.$(".dropdown").dropdown();

  // });
