Template.main_layout.helpers({
  saveNotice: function(){

    //TODO: change this to be a flash message that accepts a msg arg
    return Session.get("saveNotice");
  },
  displaySaveNotice: function(){
    return Session.get("displaySaveNotice");
  }
});
  