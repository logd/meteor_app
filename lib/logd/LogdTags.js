LogdTags = {

  upsertTags: function(tags){

    for(var i = 0; i < tags.length; i++){

      var matching_tag = Tags.findOne({title: tags[i]});

      if (!matching_tag){

        var tagAttributes = {
          title: tags[i],
          authors: [{
            authorId:  Meteor.userId(),
            lastUsed: new Date()
          }]
        };

        Meteor.call('insertTag', tagAttributes, function(error, result){
            if (error){
              console.log(error.reason);
          };
        });

      } else {

        Meteor.call('updateTag', matching_tag._id, function(error, result){
          if (error){
            console.log(error.reason);
          }; 
        });
      };
    };
  }
}