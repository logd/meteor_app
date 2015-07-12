LogdTags = {

  insertOrUpdateTags: function(tags){

    var tagAuthor = [{
      authorId:  Meteor.userId()
    }];

    // TODO: enclose this in a ready() method to protect from being called while insert is in progress
    for(var i = 0; i < tags.length; i++){

      var matching_tag = Tags.findOne({title: tags[i]});

      if (!matching_tag){

        console.log("no matching tag");

        var tagAttributes = {
          title: tags[i],
          authors: tagAuthor
        };

        // console.log("tag author: " +  tagAttributes.authors[0].authorId);

        Meteor.call('createTag', tagAttributes, function(error, result){
            if (error){
              console.log(error.reason);
          };
          // return result?
        });

      } else {

         console.log("match found, updating: "+ matching_tag._id);

        var updateTagAuthor = Meteor.userId();

        Meteor.call('updateTag', matching_tag._id, updateTagAuthor, function(error, result){
          if (error){
            console.log(error.reason);
          }; 
        });
      };
    };
    // return after for block completed?
  }
}