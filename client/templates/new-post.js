var returns_qty = 0

Template.newPost.events({
  "keyup .new-post-form": function(event){
    var postContent = event.target.value;


    if(event.which === 13){
      returns_qty+=1
      console.log("you hit return");
      console.log("event target:" + event.target.value);
      

      if(returns_qty == 2){
        console.log("you hit return twice");


        Meteor.call('newPost', postContent);
        event.target.value = "";
        return false
        returns_qty = 0;
      }
    }
  }
  // ,
  // "submit .new-post-form": function(event){

  //   var postContent = event.target.content.value;

  //   event.target.content.value = "";

  //   return false
  // },

});


 // # $scope.newSlideOnDoubleReturn = (keyCode) ->
 //  #   if keyCode == 13
 //  #     returns_qty+= 1

 //  #     if returns_qty == 2
 //  #       $scope.newSlide()
 //  #       returns_qty = 0
 //  #   else
 //  #     returns_qty = 0