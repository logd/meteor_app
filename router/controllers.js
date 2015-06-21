LoginController = RouteController.extend({
  layoutTemplate:'UtilityLayout',
  template:'login',
  action: function(){
    this.render();
  }
});

PostController = RouteController.extend({
  layoutTemplate:'PostLayout',
  template:'postContent',
  action: function(){
    this.render();
  }
});