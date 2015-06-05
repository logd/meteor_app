var returns_qty = 0

Template.newPost.events({
  "keyup .new-post-form": function(event){
    var postContent = event.target.value;
    // console.log("got a keyup - returns qty: " + returns_qty);

    if(event.which === 13){
      returns_qty+=1;
      // console.log("returns qty: " + returns_qty);

      if(returns_qty == 2){
        console.log("returns qty: " + returns_qty);
        // var postContentFormatted = postContent.replace(/(?:\r\n|\r|\n)/g, '<br />');
        Meteor.call('newPost', postContent);
        event.target.value = "";
        returns_qty = 0;
        return false
      } 
    }  else {
        // if some other key was entered reset
        returns_qty = 0;
        // console.log("reset returns qty");
    }
  }
  // ,
  // "submit .new-post-form": function(event){

  //   var postContent = event.target.content.value;

  //   event.target.content.value = "";

  //   return false
  // },

});
