var returns_qty = 0;


Template.newPost.onCreated(function () {
   this.showSearch = new ReactiveVar(false);
//   this.showSearch = new ReactiveVar(null);
});

Template.newPost.onRendered(function(){
    $('.autosize').autosize();
});

Template.newPost.helpers({
  showSearch: function() {
    // return true or false
    return Template.instance().showSearch.get();
}

});

// Template.body.onRendered(function(){
//     $('.autosize').autosize();
// });

// Template.newPost.onDestroyed(function(){
//     // remove autosize 
// });

Template.newPost.events({
  "keyup .new-post-form": function(event){
    var postContent = event.target.value;
    // console.log("got a keyup - returns qty: " + returns_qty);

    if(event.which === 13){
      returns_qty+=1;
      // console.log("returns qty: " + returns_qty);

      if(returns_qty == 2){
        // console.log("returns qty: " + returns_qty);
        // var postContentFormatted = postContent.replace(/(?:\r\n|\r|\n)/g, '<br />');
        Meteor.call('newPost', postContent);
        event.target.value = "";
        returns_qty = 0;
        // remove autosize 
        return false
      } 
    }  else {
        // if some other key was entered reset
        returns_qty = 0;
        // console.log("reset returns qty");
    }
  },
  'click .search' : function(event, t){
     console.log("clicked search");
      console.log(t);
     
      t.showSearch.set(true);

   // this.showSearch.set(true);
 
  }
  // ,
  // "submit .new-post-form": function(event){

  //   var postContent = event.target.content.value;

  //   event.target.content.value = "";

  //   return false
  // },

});
