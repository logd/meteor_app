LogdTags = {

  insertOrUpdateTags: function(tags){

    var tagAuthors = [];
    tagAuthors[0] = Meteor.userId();
    console.log("Tags: " + tags);

    // TODO: enclose this in a ready() method to protect from being called while insert is in progress
    for(var i = 0; i < tags.length; i++){

      var matching_tag = Tags.findOne({title: tags[i]});
      console.log("Matching Tag: " + matching_tag);

     

      if (!matching_tag){

        var tagAttributes = {
          title: tags[i],
          authors: tagAuthors
        };

        Meteor.call('createTag', tagAttributes, function(error, result){
            if (error){
              console.log(error.reason);
          };
          // return result?
        });

      } else {

        var tagAttributes = {
          tagId: matching_tag._id,
          title: tags[i],
          authors: tagAuthors
        };

        Meteor.call('updateTag', tagAttributes.tagId, tagAttributes, function(error, result){
          if (error){
            console.log(error.reason);
          }; 
        });
      };
    };
    // return after for block completed?
  }
}