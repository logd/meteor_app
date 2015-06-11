Tags = new Mongo.Collection('tags');

// check if exists
// associate with the post

Meteor.methods({
  upsertTags: function(tags){

    for (var i = 0; i < tags.length; i++) {
    
      // unless a matching tag already exists
      // unless ( Tags.find({ tag:tag[i] }).count() > 0 ) {
        Tags.upsert({
          tag: tag[i]
        });
      // } 
    };
  }
});
