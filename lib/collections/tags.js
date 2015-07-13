Tags = new Mongo.Collection('tags');

Meteor.methods({
  insertTag: function(tagAttributes){

    check(Meteor.userId(), String);
    check(tagAttributes, {
      title:  String,
      authors: [Match.Any]
    });

    Tags.insert(tagAttributes);

  },
  updateTag: function(tagId){

    check(tagId, String);
    check(Meteor.userId(), String);
    // check(updateTagAuthor, String);

    // has this author previously used this tag?
    var previouslyUsed = Tags.findOne({_id: tagId, "authors.authorId": Meteor.userId()});

    if(previouslyUsed != null){

      // console.log("tag was previously used by this author: " + previouslyUsed);

      Tags.update({_id: tagId, "authors.authorId": Meteor.userId()}, {
        $set: { "authors.$.lastUsed": new Date() } 
      });

    } else {

       // console.log("add new author: " + previouslyUsed);


      var newTagAuthor = Tags.findOne({ _id: tagId });

      Tags.update({ _id: newTagAuthor._id }, {
        $push: {
            authors: 
            {
              authorId: Meteor.userId(),
              lastUsed: new Date()
            }
        }
      }); 
    };
  }
});