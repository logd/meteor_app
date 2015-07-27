Template.page_title.helpers({
  pageTitle: function () {
  
    switch (Router.current().route.getName()){
      case 'login':
        return "Logd";

      case 'tag_matches':
        return "#" + Router.current().params.tag;

      case 'tags_list':
        return "My Topics";

      default: 
        return "Logd";
    };
  },
  largeHeader: function(){

    if (Router.current().route.getName() == "login") {
      return true;
    } else{
      return false;
    };
    
  }
});


