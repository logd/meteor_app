  Template.body.onRendered(function(){


    // this.$('.sidebar').sidebar('toggle');
    // this.$('#app-menu-button').sidebar('toggle');
    
    // this.$('.left.demo.sidebar').first().sidebar('attach events', '.toggle.button');

    // this.$('.toggle.button').removeClass('disabled');
    // this.$('#app-menu').sidebar('toggle');

    this.$('.ui.sidebar')
      .sidebar('attach events', '.launch.button')
    ;

    this.$(".dropdown").dropdown();

  });

    Template.ApplicationLayout.onRendered(function(){

    // SEMANTIC UI Components
    this.$(".dropdown").dropdown();

  });