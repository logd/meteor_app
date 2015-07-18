  Template.body.helpers({
saveNotice: function(){

    //TODO: change this to be a flash message that accepts a msg arg
    return Session.get("saveNotice");

    // if(Session.get("foo")){
    //   return "";
    // } else {
    //   return ".hidden";
    // }

  }
  });
  